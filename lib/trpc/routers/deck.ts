import { z } from "zod";

type MasteryDistributionRow = { progress: string; count: number };
import { createTRPCRouter, protectedProcedure } from "@/lib/trpc/constructor";
import {
  createDeck,
  getDecks,
  getFlashCardsInDesk,
  getDeckMasteryDistribution,
} from "@/prisma/client/sql";
import { AccessLevel } from "@/prisma/client";
import {
  calculateDeckProgress,
  createCalendarEvent,
} from "@/lib/google-calendar";

/**
 * Calculates the review date based on mastery distribution
 * - More beginner cards = sooner review (closer to now)
 * - More mastery cards = later review (further in future)
 */
function calculateReviewDate(
  baseDate: Date,
  masteryDistribution: MasteryDistributionRow[],
): Date {
  // Default to 1 hour from now if no cards in the deck
  const totalCards = masteryDistribution.reduce(
    (sum, item) => sum + item.count,
    0,
  );
  if (totalCards === 0) {
    const date = new Date(baseDate);
    date.setHours(date.getHours() + 1);
    return date;
  }

  // Count cards by progress level
  const beginnerCount =
    masteryDistribution.find((d) => d.progress === "BEGIN")?.count || 0;
  const intermediateCount =
    masteryDistribution.find((d) => d.progress === "INTERM")?.count || 0;
  const masteryCount =
    masteryDistribution.find((d) => d.progress === "MASTERY")?.count || 0;

  // Calculate score between 0-1
  // The higher the score, the more mastered the deck is
  // 0 = all beginner, 1 = all mastery
  const beginnerWeight = 0;
  const intermediateWeight = 0.5;
  const masteryWeight = 1.0;

  const weightedSum =
    beginnerCount * beginnerWeight +
    intermediateCount * intermediateWeight +
    masteryCount * masteryWeight;

  const masteryScore = weightedSum / totalCards;

  // Scale the delay based on mastery score
  // 0 = 1 hour, 1 = 7 days
  const minHours = 1; // 1 hour for all beginner cards
  const maxHours = 24 * 7; // 7 days for all mastery cards

  const hoursToAdd = minHours + masteryScore * (maxHours - minHours);

  // Create a new date to avoid modifying the input
  const result = new Date(baseDate);
  result.setTime(result.getTime() + hoursToAdd * 60 * 60 * 1000);

  return result;
}

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
      const rawRows = (await ctx.prisma.$queryRawTyped(
        getDeckMasteryDistribution(input.deckId),
      )) as unknown as MasteryDistributionRow[];

      const masteryDistribution: MasteryDistributionRow[] = rawRows.map(
        (row) => ({
          progress: row.progress,
          count: typeof row.count === "bigint" ? Number(row.count) : row.count,
        }),
      );

      // Calculate overall progress percentage
      const progress = calculateDeckProgress(flashcards);

      // Adjust startDateTime based on deck mastery distribution
      const adjustedStartDateTime = calculateReviewDate(
        input.startDateTime,
        masteryDistribution,
      );

      // Adjust endDateTime to be 1 hour after the new startDateTime
      const adjustedEndDateTime = new Date(
        adjustedStartDateTime.getTime() + 60 * 60 * 1000,
      );

      const eventTitle = input.eventTitle || "Flashcard Deck Review";
      const eventDescription =
        input.eventDescription ||
        `Review your flashcard deck: Progress ${progress}%. ${flashcards.length} cards total.`;

      const event = await createCalendarEvent(accessToken, {
        summary: eventTitle,
        description: eventDescription,
        startDateTime: adjustedStartDateTime,
        endDateTime: adjustedEndDateTime,
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
