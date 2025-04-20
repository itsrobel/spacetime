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
  getDecks: protectedProcedure.query(async ({ ctx }) => {
    const gId = ctx.session.user.googleId;
    if (gId) {
      const [gUser] = await ctx.prisma.$queryRawTyped(getUserByGID(gId));
      const decks = await ctx.prisma.$queryRawTyped(getDecks(gUser.id));
      return { decks };
    }
  }),

  getFlashCardsInDeck: protectedProcedure
    .input(z.object({ deckId: z.string() }))
    .query(async ({ input, ctx }) => {
      const gId = ctx.session.user.googleId;
      if (gId) {
        //TODO:check if use owns the deck
        const [gUser] = await ctx.prisma.$queryRawTyped(getUserByGID(gId));
        const flashcards = await ctx.prisma.$queryRawTyped(
          getFlashCardsInDesk(input.deckId),
        );
        // const decks = await ctx.prisma.$queryRawTyped(getDecks(gUser.id));

        return { flashcards };
        // decks.map(async (deck) => {
        //   const flashcards = await ctx.prisma.$queryRawTyped(
        //     getFlashCardsInDesk(deck.id),
        //   );
        //   console.log(flashcards);
        // });
      }
    }),
});
