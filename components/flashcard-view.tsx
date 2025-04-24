"use client";

import { memo, useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useTRPC } from "@/lib/trpc/client";
import { toast } from "sonner";

interface FlashcardViewProps {
  deck_id: string;
}

function FlashcardView({ deck_id }: FlashcardViewProps) {
  const api = useTRPC();
  const queryClient = useQueryClient();

  // Fetch flashcards for the deck
  const [showInitialProgress, setShowInitialProgress] = useState(true);
  const { data, isLoading, isError } = useQuery(
    api.deck.getFlashCardsInDeck.queryOptions({ deckId: deck_id }),
  );
  const flashcards = data?.flashcards || [];

  // State to track if deck is completed
  const [showSummary, setShowSummary] = useState(false);

  // State to track total progress
  const [deckProgress, setDeckProgress] = useState<{
    mastered: number;
    intermediate: number;
    beginner: number;
    total: number;
  }>({ mastered: 0, intermediate: 0, beginner: 0, total: 0 });

  // Card index and flip state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Set up mutations for tracking progress
  const markKnownMutation = useMutation(
    api.flash.markFlashcardKnown.mutationOptions({
      onSuccess: (data) => {
        // Invalidate relevant queries
        queryClient.invalidateQueries({
          queryKey: ["deck.getFlashCardsInDeck", { deckId: deck_id }],
        });

        // Show a toast for progress updates
        if (data.progressUpdated) {
          toast.success(`Progress Updated to ${data.progress}!`, {
            description:
              data.progress === "MASTERY"
                ? "You've mastered this card!"
                : `Keep going! ${data.progress === "INTERM" ? "7" : "3"} consecutive correct answers needed.`,
          });
        } else if (data.consecutiveCorrect && data.consecutiveCorrect > 0) {
          // Show progress even if level didn't change
          const correctCount = data.consecutiveCorrect || 0;
          if (data.progress === "BEGIN" && correctCount < 3) {
            toast.success(`Progress: ${correctCount}/3`, {
              description: `${3 - correctCount} more consecutive correct answers to reach Intermediate.`,
            });
          } else if (data.progress === "INTERM" && correctCount < 7) {
            toast.success(`Progress: ${correctCount}/7`, {
              description: `${7 - correctCount} more consecutive correct answers to reach Mastery.`,
            });
          }
        }
      },
    }),
  );

  const markUnknownMutation = useMutation(
    api.flash.markFlashcardUnknown.mutationOptions({
      onSuccess: () => {
        // Invalidate relevant queries
        queryClient.invalidateQueries({
          queryKey: ["deck.getFlashCardsInDeck", { deckId: deck_id }],
        });
      },
    }),
  );

  // Handlers
  const handleFlip = (e: any) => {
    if (e.pointerType === "touch") e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex((i) => i + 1);
      setIsFlipped(false);
    } else if (
      currentCardIndex === flashcards.length - 1 &&
      flashcards.length > 0
    ) {
      // Show summary when reaching the last card
      setShowSummary(true);
    }
  };

  const handlePrev = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((i) => i - 1);
      setIsFlipped(false);
    }
  };

  const handleKnow = () => {
    const card = flashcards[currentCardIndex];
    markKnownMutation.mutate({ deckId: deck_id, flashId: card.id });
    handleNext();
  };

  const handleDontKnow = () => {
    const card = flashcards[currentCardIndex];
    markUnknownMutation.mutate({ deckId: deck_id, flashId: card.id });
    handleNext();
  };

  // Function to get progress indicator
  const getProgressBadge = (progress: string) => {
    switch (progress) {
      case "MASTERY":
        return (
          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            <CheckCircle2 className="mr-1 h-3 w-3" /> Mastered
          </span>
        );
      case "INTERM":
        return (
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            Intermediate
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
            Beginner
          </span>
        );
    }
  };

  // Calculate deck progress whenever flashcards change
  useEffect(() => {
    if (flashcards.length > 0) {
      const progress = {
        mastered: 0,
        intermediate: 0,
        beginner: 0,
        total: flashcards.length,
      };

      flashcards.forEach((card) => {
        if ((card as any).progress === "MASTERY") {
          progress.mastered++;
        } else if ((card as any).progress === "INTERM") {
          progress.intermediate++;
        } else {
          progress.beginner++;
        }
      });

      setDeckProgress(progress);
    }
  }, [flashcards]);

  // Handle completion of the deck
  useEffect(() => {
    if (currentCardIndex >= flashcards.length - 1 && flashcards.length > 0) {
      // Show summary when reaching the last card
      setShowSummary(true);
    }
  }, [currentCardIndex, flashcards.length]);

  // Loading/Error states
  if (isLoading) return <div>Loading flashcards...</div>;
  if (isError) return <div>Error loading flashcards.</div>;
  if (!flashcards.length) return <div>No flashcards in this deck.</div>;

  const card = flashcards[currentCardIndex];

  // State to track initial progress view

  // Reset the deck and hide summary
  const handleRestartDeck = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setShowSummary(false);
    setShowInitialProgress(true); // Show initial progress again
  };

  // Start studying the deck
  const handleStartStudying = () => {
    setShowInitialProgress(false);
  };

  // Render initial progress view
  if (showInitialProgress && !showSummary && flashcards.length > 0) {
    const masteryPercentage = Math.round(
      (deckProgress.mastered / deckProgress.total) * 100,
    );
    const intermediatePercentage = Math.round(
      (deckProgress.intermediate / deckProgress.total) * 100,
    );
    const beginnerPercentage = Math.round(
      (deckProgress.beginner / deckProgress.total) * 100,
    );

    return (
      <div className="w-full max-w-md">
        <Card>
          <CardContent className="pt-6">
            <h3 className="mb-4 text-center text-xl font-bold">
              Deck Overview
            </h3>
            <div className="space-y-4">
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium">Mastered</span>
                  <span>
                    {deckProgress.mastered} of {deckProgress.total} (
                    {masteryPercentage}%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-green-500"
                    style={{ width: `${masteryPercentage}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium">Intermediate</span>
                  <span>
                    {deckProgress.intermediate} of {deckProgress.total} (
                    {intermediatePercentage}%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${intermediatePercentage}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium">Beginner</span>
                  <span>
                    {deckProgress.beginner} of {deckProgress.total} (
                    {beginnerPercentage}%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-gray-400"
                    style={{ width: `${beginnerPercentage}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Button onClick={handleStartStudying}>Start Studying</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Render summary view if needed
  if (showSummary) {
    const masteryPercentage = Math.round(
      (deckProgress.mastered / deckProgress.total) * 100,
    );
    const intermediatePercentage = Math.round(
      (deckProgress.intermediate / deckProgress.total) * 100,
    );
    const beginnerPercentage = Math.round(
      (deckProgress.beginner / deckProgress.total) * 100,
    );

    return (
      <div className="w-full max-w-md">
        <Card>
          <CardContent className="pt-6">
            <h3 className="mb-4 text-center text-xl font-bold">Deck Summary</h3>
            <div className="space-y-4">
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium">Mastered</span>
                  <span>
                    {deckProgress.mastered} of {deckProgress.total} (
                    {masteryPercentage}%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-green-500"
                    style={{ width: `${masteryPercentage}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium">Intermediate</span>
                  <span>
                    {deckProgress.intermediate} of {deckProgress.total} (
                    {intermediatePercentage}%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${intermediatePercentage}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium">Beginner</span>
                  <span>
                    {deckProgress.beginner} of {deckProgress.total} (
                    {beginnerPercentage}%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-gray-400"
                    style={{ width: `${beginnerPercentage}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Button onClick={handleRestartDeck}>Study Again</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      {/* Navigation */}
      <div className="mb-4 flex justify-between">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          disabled={currentCardIndex === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="flex items-center text-sm text-muted-foreground">
          {currentCardIndex + 1} of {flashcards.length}
        </span>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={currentCardIndex === flashcards.length - 1}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Flashcard */}
      <div className="perspective h-[300px] w-full">
        <div
          className={`relative h-full w-full duration-500 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
          onPointerDown={handleFlip}
        >
          {/* Front */}
          <Card
            className={`absolute h-full w-full backface-hidden ${isFlipped ? "invisible" : ""}`}
          >
            <CardContent className="flex h-[calc(100%-60px)] items-center justify-center p-6">
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  {getProgressBadge((card as any).progress || "BEGIN")}
                </div>
                <h3 className="mb-4 text-xl font-semibold">{card.title}</h3>
                <p className="text-sm text-muted-foreground">
                  Click to reveal answer
                </p>
              </div>
            </CardContent>
            <CardFooter className="border-t p-4 text-sm text-muted-foreground">
              <div className="w-full text-center text-xs text-muted-foreground">
                {(card as any).progress === "MASTERY" ? (
                  "Mastered"
                ) : (card as any).progress === "INTERM" ? (
                  <>
                    <span className="font-medium">
                      {(card as any).consecutiveCorrect || 0}/7
                    </span>{" "}
                    correct answers to mastery
                    {(card as any).consecutiveCorrect > 0 && (
                      <span className="ml-1 text-blue-600">
                        (+{(card as any).consecutiveCorrect})
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <span className="font-medium">
                      {(card as any).consecutiveCorrect || 0}/3
                    </span>{" "}
                    correct answers to advance
                    {(card as any).consecutiveCorrect > 0 && (
                      <span className="ml-1 text-blue-600">
                        (+{(card as any).consecutiveCorrect})
                      </span>
                    )}
                  </>
                )}
              </div>
            </CardFooter>
          </Card>
          {/* Back */}
          <Card
            className={`absolute h-full w-full rotate-y-180 backface-hidden ${!isFlipped ? "invisible" : ""}`}
          >
            <CardContent className="flex h-[calc(100%-60px)] items-center justify-center p-6">
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  {getProgressBadge((card as any).progress || "BEGIN")}
                </div>
                <h3 className="mb-4 text-xl font-semibold">{card.content}</h3>
              </div>
            </CardContent>
            <CardFooter className="border-t p-4 text-sm text-muted-foreground">
              <div className="w-full text-center text-xs text-muted-foreground">
                {(card as any).progress === "MASTERY" ? (
                  "Mastered"
                ) : (card as any).progress === "INTERM" ? (
                  <>
                    <span className="font-medium">
                      {(card as any).consecutiveCorrect || 0}/7
                    </span>{" "}
                    correct answers to mastery
                    {(card as any).consecutiveCorrect > 0 && (
                      <span className="ml-1 text-blue-600">
                        (+{(card as any).consecutiveCorrect})
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <span className="font-medium">
                      {(card as any).consecutiveCorrect || 0}/3
                    </span>{" "}
                    correct answers to advance
                    {(card as any).consecutiveCorrect > 0 && (
                      <span className="ml-1 text-blue-600">
                        (+{(card as any).consecutiveCorrect})
                      </span>
                    )}
                  </>
                )}
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Know/Don't Know */}
      <div className="mt-4 flex justify-center space-x-4">
        <Button
          variant="outline"
          className="w-full border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600"
          onClick={handleDontKnow}
          disabled={markUnknownMutation.isPending}
        >
          <XCircle className="mr-2 h-4 w-4" />
          Don't Know
        </Button>
        <Button
          variant="outline"
          className="w-full border-green-200 text-green-500 hover:bg-green-50 hover:text-green-600"
          onClick={handleKnow}
          disabled={markKnownMutation.isPending}
        >
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Know
        </Button>
      </div>
    </div>
  );
}

export default memo(FlashcardView);
