import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/lib/trpc/constructor";
import {
  getUserByGID,
  createFlash,
  getUserFlashCard,
  addFlashToDeck,
} from "@/prisma/client/sql";
import { randomUUID } from "crypto";

export const flashRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getUser: protectedProcedure.query(async ({ ctx }) => {
    return ctx.session;
  }),
  createFlash: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        decks: z.array(z.string()),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const gId = ctx.session.user?.googleId;
      if (gId) {
        const flashId = randomUUID();
        const [gUser] = await ctx.prisma.$queryRawTyped(getUserByGID(gId));
        await ctx.prisma.$queryRawTyped(
          createFlash(flashId, gUser.id, input.title, input.content),
        );
        await Promise.all(
          input.decks.map((deckId) =>
            ctx.prisma.$queryRawTyped(addFlashToDeck(deckId, flashId)),
          ),
        );
        return { data: { message: "success" } };
      }
    }),

  addToDeck: protectedProcedure
    .input(z.object({ flashId: z.string(), deckId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.$queryRawTyped(
        addFlashToDeck(input.deckId, input.flashId),
      );
      return { data: "Successfully added flash" };
      // }
    }),
  getFlash: protectedProcedure.query(async ({ ctx }) => {
    const gId = ctx.session.user.googleId;
    if (gId) {
      const flash = await ctx.prisma.$queryRawTyped(getUserFlashCard());
      return { flash };
    }
  }),
});
