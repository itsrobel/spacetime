import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/lib/trpc/constructor";
import {
  createDeck,
  getUserByGID,
  getDecks,
  getFlashCardsInDesk,
} from "@/prisma/client/sql";
import { AccessLevel } from "@/prisma/client";

export const deckRouter = createTRPCRouter({
  createDeck: protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const gId = ctx.session.user?.googleId;
      if (gId) {
        const [gUser] = await ctx.prisma.$queryRawTyped(getUserByGID(gId));
        await ctx.prisma.$queryRawTyped(
          createDeck(input.title, gUser.id, AccessLevel.PRIVATE),
        );
        return { data: "Successfully Created flash" };
      }
    }),
  getDeck: protectedProcedure.query(async ({ ctx }) => {
    const gId = ctx.session.user.googleId;
    if (gId) {
      const [gUser] = await ctx.prisma.$queryRawTyped(getUserByGID(gId));
      const decks = await ctx.prisma.$queryRawTyped(getDecks(gUser.id));

      return { decks };
      // decks.map(async (deck) => {
      //   const flashcards = await ctx.prisma.$queryRawTyped(
      //     getFlashCardsInDesk(deck.id),
      //   );
      //   console.log(flashcards);
      // });
    }
  }),
});
