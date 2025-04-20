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
} from "@/prisma/client/sql";

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
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const gId = ctx.session.user?.googleId;
      if (gId) {
        const [gUser] = await ctx.prisma.$queryRawTyped(getUserByGID(gId));
        await ctx.prisma.$queryRawTyped(
          createFlash(gUser.id, input.title, input.content),
        );
        return { data: "Successfully Created flash" };
      }
    }),
  getFlash: protectedProcedure.query(async ({ ctx }) => {
    const gId = ctx.session.user.googleId;
    if (gId) {
      const flash = await ctx.prisma.$queryRawTyped(getUserFlashCard());
      return { flash };
    }
  }),
});
