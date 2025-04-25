import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/lib/trpc/constructor";
import {
  createFlash,
  getUserFlashCard,
  addFlashToDeck,
  updateFlashProgress,
  getFlashCardProgress,
  incrementConsecutiveCorrect,
  resetConsecutiveCorrect,
  deleteFromDeck,
  checkFlashExist,
  deleteFlash,
  getAllFlashDecks,
  getDeckIdFromFlashId,
} from "@/prisma/client/sql";
import { randomUUID } from "crypto";

export const flashRouter = createTRPCRouter({
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
        await ctx.prisma.$queryRawTyped(
          createFlash(flashId, gId, input.title, input.content),
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
  deleteFromDeck: protectedProcedure
    .input(z.object({ flashId: z.string(), deckId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.$queryRawTyped(
        deleteFromDeck(input.deckId, input.flashId),
      );
      const isFlash = await ctx.prisma.$queryRawTyped(
        checkFlashExist(input.flashId),
      );
      if (!isFlash) {
        await ctx.prisma.$queryRawTyped(deleteFlash(input.flashId));
      }
      return { data: "Successfully deleteFlash flash" };
      // }
    }),
  getFlash: protectedProcedure.query(async ({ ctx }) => {
    const gId = ctx.session.user.googleId;
    if (gId) {
      const flash = await ctx.prisma.$queryRawTyped(getUserFlashCard(gId));
      return { flash };
    }
  }),

  getDecks: protectedProcedure
    .input(z.object({ flashId: z.string() }))
    .query(async ({ input, ctx }) => {
      const gId = ctx.session.user.googleId;
      if (gId) {
        const rows = await ctx.prisma.$queryRawTyped(getAllFlashDecks(gId));
        const flashDeckMap: { [flashId: string]: string[] } = {};
        rows.forEach(({ flashId, deckId }) => {
          if (!flashDeckMap[flashId]) {
            flashDeckMap[flashId] = [];
          }
          flashDeckMap[flashId].push(deckId);
        });
        return { flashDeckMap };
      }
    }),

  updateFlashDecks: protectedProcedure
    .input(
      z.object({
        flashId: z.string(),
        deckIds: z.array(z.string()),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const gId = ctx.session.user.googleId;
      if (!gId) throw new Error("Not authenticated");

      // Get current deck IDs for this flashcard
      const currentRows = await ctx.prisma.$queryRawTyped(
        getDeckIdFromFlashId(input.flashId),
      );
      const currentDeckIds = currentRows?.map((row) => row.deckId);

      const toAdd = input.deckIds.filter((id) => !currentDeckIds.includes(id));
      const toRemove = currentDeckIds.filter(
        (id) => !input.deckIds.includes(id),
      );

      toAdd.map(async (v) => {
        await ctx.prisma.$queryRawTyped(addFlashToDeck(v, input.flashId));
      });
      await ctx.prisma.deckFlash.createMany({
        data: toAdd.map((deckId) => ({
          deckId,
          flashId: input.flashId,
        })),
        skipDuplicates: true,
      });

      toRemove.map(async (v) => {
        await ctx.prisma.$queryRawTyped(deleteFromDeck(v, input.flashId));
        const isFlash = await ctx.prisma.$queryRawTyped(
          checkFlashExist(input.flashId),
        );
        if (!isFlash) {
          await ctx.prisma.$queryRawTyped(deleteFlash(input.flashId));
        }
      });
      await ctx.prisma.deckFlash.deleteMany({
        where: {
          flashId: input.flashId,
          deckId: { in: toRemove },
        },
      });

      return { added: toAdd, removed: toRemove };
    }),

  getFlashProgress: protectedProcedure
    .input(z.object({ deckId: z.string(), flashId: z.string() }))
    .query(async ({ ctx, input }) => {
      const { deckId, flashId } = input;
      const progressData = (await ctx.prisma.$queryRawTyped(
        getFlashCardProgress(deckId, flashId),
      )) as Array<{ progress: string; consecutiveCorrect: number }>;

      return progressData.length > 0
        ? progressData[0]
        : { progress: "BEGIN", consecutiveCorrect: 0 };
    }),

  markFlashcardKnown: protectedProcedure
    .input(z.object({ deckId: z.string(), flashId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { deckId, flashId } = input;

      // Get current progress data
      const progressData = (await ctx.prisma.$queryRawTyped(
        getFlashCardProgress(deckId, flashId),
      )) as Array<{ progress: string; consecutiveCorrect: number }>;

      if (progressData.length === 0) {
        return { success: false, message: "Flash card not found" };
      }

      const { progress, consecutiveCorrect } = progressData[0];

      // Increment the consecutive correct counter
      await ctx.prisma.$queryRawTyped(
        incrementConsecutiveCorrect(deckId, flashId),
      );

      const newConsecutiveCorrect = consecutiveCorrect + 1;
      let newProgress = progress;
      let progressUpdated = false;

      // Update progress based on consecutive correct answers
      if (progress === "BEGIN" && newConsecutiveCorrect >= 3) {
        // Upgrade from BEGIN to INTERM after 3 correct answers
        await ctx.prisma.$queryRawTyped(
          updateFlashProgress("INTERM", deckId, flashId),
        );
        newProgress = "INTERM";
        progressUpdated = true;
      } else if (progress === "INTERM" && newConsecutiveCorrect >= 7) {
        // Upgrade from INTERM to MASTERY after 7 correct answers
        await ctx.prisma.$queryRawTyped(
          updateFlashProgress("MASTERY", deckId, flashId),
        );
        newProgress = "MASTERY";
        progressUpdated = true;
      }

      return {
        success: true,
        progress: newProgress,
        consecutiveCorrect: newConsecutiveCorrect,
        progressUpdated,
      };
    }),

  markFlashcardUnknown: protectedProcedure
    .input(z.object({ deckId: z.string(), flashId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { deckId, flashId } = input;

      // Reset the consecutive correct counter to 0
      await ctx.prisma.$queryRawTyped(resetConsecutiveCorrect(deckId, flashId));

      // Get the current progress (doesn't change when marked unknown)
      const progressData = (await ctx.prisma.$queryRawTyped(
        getFlashCardProgress(deckId, flashId),
      )) as Array<{ progress: string; consecutiveCorrect: number }>;

      const progress =
        progressData.length > 0 ? progressData[0].progress : "BEGIN";

      return {
        success: true,
        progress,
        consecutiveCorrect: 0,
      };
    }),
});
