import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/lib/trpc/constructor";
import { createDeck, getDecks, getFlashCardsInDesk } from "@/prisma/client/sql";
import { AccessLevel } from "@/prisma/client";
import {
  calculateDeckProgress,
  createCalendarEvent,
} from "@/lib/google-calendar";

export const deckRouter = createTRPCRouter({
  createDeck: protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const gId = ctx.session.user?.googleId;
      if (gId) {
        await ctx.prisma.$queryRawTyped(
          createDeck(input.title, gId, AccessLevel.PRIVATE),
        );
        return { data: "Successfully Created flash" };
      }
    }),

  createDeckProgressEvent: protectedProcedure
    .input(
      z.object({
        deckId: z.string(),
        eventTitle: z.string().optional(),
        eventDescription: z.string().optional(),
        startDateTime: z.date(),
        endDateTime: z.date(),
        timeZone: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const gId = ctx.session.user.googleId;
      const accessToken = ctx.session.accessToken;

      if (!gId || !accessToken) {
        throw new Error("Not authenticated or missing Google permissions");
      }

      // Get flash cards in the deck to calculate progress
      const flashcards = await ctx.prisma.$queryRawTyped(
        getFlashCardsInDesk(input.deckId),
      );

      const progress = calculateDeckProgress(flashcards);

      const eventTitle = input.eventTitle || "Flashcard Deck Review";
      const eventDescription =
        input.eventDescription ||
        `Review your flashcard deck: Progress ${progress}%. ${flashcards.length} cards total.`;

      const event = await createCalendarEvent(accessToken, {
        summary: eventTitle,
        description: eventDescription,
        startDateTime: input.startDateTime,
        endDateTime: input.endDateTime,
        timeZone: input.timeZone,
      });

      return {
        success: true,
        progress,
        totalCards: flashcards.length,
        event,
      };
    }),
  getDecks: protectedProcedure.query(async ({ ctx }) => {
    const gId = ctx.session.user.googleId;
    if (gId) {
      const decks = await ctx.prisma.$queryRawTyped(getDecks(gId));
      return { decks };
    }
  }),

  getFlashCardsInDeck: protectedProcedure
    .input(z.object({ deckId: z.string() }))
    .query(async ({ input, ctx }) => {
      const gId = ctx.session.user.googleId;
      if (gId) {
        //TODO:check if use owns the deck
        const flashcards = await ctx.prisma.$queryRawTyped(
          getFlashCardsInDesk(input.deckId),
        );

        return { flashcards };
      }
    }),
});
