"use client";

import { memo, useState, useEffect, ReactNode } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useTRPC } from "@/lib/trpc/client";
import { toast } from "sonner";

// --- Types and Enums ---

enum ProgressLevel {
  MASTERED = "MASTERY",
  INTERMEDIATE = "INTERM",
  BEGINNER = "BEGIN",
}

interface Flashcard {
  id: string;
  title: string;
  content: string;
  progress: ProgressLevel;
  consecutiveCorrect?: number;
}

interface DeckProgress {
  mastered: number;
  intermediate: number;
  beginner: number;
  total: number;
}

interface FlashcardViewProps {
  deck_id: string;
}

// --- Helper Functions ---

const getProgressLevel = (progress?: string): ProgressLevel => {
  if (progress === ProgressLevel.MASTERED) return ProgressLevel.MASTERED;
  if (progress === ProgressLevel.INTERMEDIATE)
    return ProgressLevel.INTERMEDIATE;
  return ProgressLevel.BEGINNER;
};

const getProgressTarget = (progress: ProgressLevel) =>
  progress === ProgressLevel.INTERMEDIATE ? 7 : 3;

// --- Reusable Components ---

function ProgressBadge({ progress }: { progress: ProgressLevel }) {
  const badgeMap: Record<
    ProgressLevel,
    { color: string; text: string; icon?: ReactNode }
  > = {
    [ProgressLevel.MASTERED]: {
      color: "bg-green-100 text-green-800",
      text: "Mastered",
      icon: <CheckCircle2 className="mr-1 h-3 w-3" />,
    },
    [ProgressLevel.INTERMEDIATE]: {
      color: "bg-blue-100 text-blue-800",
      text: "Intermediate",
    },
    [ProgressLevel.BEGINNER]: {
      color: "bg-gray-100 text-gray-800",
      text: "Beginner",
    },
  };
  const { color, text, icon } = badgeMap[progress];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${color}`}
    >
      {icon}
      {text}
    </span>
  );
}

function DeckProgressBar({
  label,
  value,
  total,
  colorClass,
}: {
  label: string;
  value: number;
  total: number;
  colorClass: string;
}) {
  const percentage = total ? Math.round((value / total) * 100) : 0;
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span>
          {value} of {total} ({percentage}%)
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className={`h-full rounded-full ${colorClass}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function DeckOverview({
  progress,
  onStart,
}: {
  progress: DeckProgress;
  onStart: () => void;
}) {
  return (
    <div className="w-full max-w-md">
      <Card>
        <CardContent className="pt-6">
          <h3 className="mb-4 text-center text-xl font-bold">Deck Overview</h3>
          <div className="space-y-4">
            <DeckProgressBar
              label="Mastered"
              value={progress.mastered}
              total={progress.total}
              colorClass="bg-green-500"
            />
            <DeckProgressBar
              label="Intermediate"
              value={progress.intermediate}
              total={progress.total}
              colorClass="bg-blue-500"
            />
            <DeckProgressBar
              label="Beginner"
              value={progress.beginner}
              total={progress.total}
              colorClass="bg-gray-400"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <Button onClick={onStart}>Start Studying</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function DeckSummary({
  progress,
  onRestart,
}: {
  progress: DeckProgress;
  onRestart: () => void;
}) {
  return (
    <div className="w-full max-w-md">
      <Card>
        <CardContent className="pt-6">
          <h3 className="mb-4 text-center text-xl font-bold">Deck Summary</h3>
          <div className="space-y-4">
            <DeckProgressBar
              label="Mastered"
              value={progress.mastered}
              total={progress.total}
              colorClass="bg-green-500"
            />
            <DeckProgressBar
              label="Intermediate"
              value={progress.intermediate}
              total={progress.total}
              colorClass="bg-blue-500"
            />
            <DeckProgressBar
              label="Beginner"
              value={progress.beginner}
              total={progress.total}
              colorClass="bg-gray-400"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <Button onClick={onRestart}>Study Again</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Navigation({
  current,
  total,
  onPrev,
  onNext,
  disablePrev,
  disableNext,
}: {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  disablePrev: boolean;
  disableNext: boolean;
}) {
  return (
    <div className="mb-4 flex justify-between">
      <Button
        variant="outline"
        size="icon"
        onClick={onPrev}
        disabled={disablePrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="flex items-center text-sm text-muted-foreground">
        {current + 1} of {total}
      </span>
      <Button
        variant="outline"
        size="icon"
        onClick={onNext}
        disabled={disableNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

function Flashcard({
  card,
  isFlipped,
  onFlip,
}: {
  card: any;
  isFlipped: boolean;
  onFlip: (e: React.PointerEvent) => void;
}) {
  const progress = getProgressLevel(card.progress);
  const target = getProgressTarget(progress);
  const correct = card.consecutiveCorrect || 0;

  const renderFooter = () => {
    if (progress === ProgressLevel.MASTERED) return "Mastered";
    return (
      <>
        <span className="font-medium">
          {correct}/{target}
        </span>{" "}
        correct answers to{" "}
        {progress === ProgressLevel.INTERMEDIATE ? "mastery" : "advance"}
      </>
    );
  };

  return (
    <div className="perspective h-[300px] w-full">
      <div
        className={`relative h-full w-full duration-500 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
        onPointerDown={onFlip}
      >
        {/* Front */}
        <Card
          className={`absolute h-full w-full backface-hidden ${isFlipped ? "invisible" : ""}`}
        >
          <CardContent className="flex h-[calc(100%-60px)] items-center justify-center p-6">
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <ProgressBadge progress={progress} />
              </div>
              <h3 className="mb-4 text-xl font-semibold">{card.title}</h3>
              <p className="text-sm text-muted-foreground">
                Click to reveal answer
              </p>
            </div>
          </CardContent>
          <CardFooter className="border-t p-4 text-sm text-muted-foreground">
            <div className="w-full text-center text-xs text-muted-foreground">
              {renderFooter()}
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
                <ProgressBadge progress={progress} />
              </div>
              <h3 className="mb-4 text-xl font-semibold">{card.content}</h3>
            </div>
          </CardContent>
          <CardFooter className="border-t p-4 text-sm text-muted-foreground">
            <div className="w-full text-center text-xs text-muted-foreground">
              {renderFooter()}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

// --- Main Component ---

function FlashcardView({ deck_id }: FlashcardViewProps) {
  const api = useTRPC();
  const queryClient = useQueryClient();

  const [showInitialProgress, setShowInitialProgress] = useState(true);
  const [showSummary, setShowSummary] = useState(false);
  const [deckProgress, setDeckProgress] = useState<DeckProgress>({
    mastered: 0,
    intermediate: 0,
    beginner: 0,
    total: 0,
  });
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const { data, isLoading, isError } = useQuery(
    api.deck.getFlashCardsInDeck.queryOptions({ deckId: deck_id }),
  );
  const flashcards = data?.flashcards || [];

  // --- Mutations ---
  const markKnownMutation = useMutation(
    api.flash.markFlashcardKnown.mutationOptions({
      onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: ["deck.getFlashCardsInDeck", { deckId: deck_id }],
        });
        if (data.progressUpdated) {
          toast.success(`Progress Updated to ${data.progress}!`, {
            description:
              data.progress === ProgressLevel.MASTERED
                ? "You've mastered this card!"
                : `Keep going! ${data.progress === ProgressLevel.INTERMEDIATE ? "7" : "3"} consecutive correct answers needed.`,
          });
        } else if (data.consecutiveCorrect && data.consecutiveCorrect > 0) {
          const correctCount = data.consecutiveCorrect || 0;
          if (data.progress === ProgressLevel.BEGINNER && correctCount < 3) {
            toast.success(`Progress: ${correctCount}/3`, {
              description: `${3 - correctCount} more consecutive correct answers to reach Intermediate.`,
            });
          } else if (
            data.progress === ProgressLevel.INTERMEDIATE &&
            correctCount < 7
          ) {
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
        queryClient.invalidateQueries({
          queryKey: ["deck.getFlashCardsInDeck", { deckId: deck_id }],
        });
      },
    }),
  );

  // --- Handlers ---

  const handleFlip = (e: React.PointerEvent) => {
    if ((e as any).pointerType === "touch") e.preventDefault();
    setIsFlipped((prev) => !prev);
  };

  const handleNext = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex((i) => i + 1);
      setIsFlipped(false);
    } else if (
      currentCardIndex === flashcards.length - 1 &&
      flashcards.length > 0
    ) {
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

  const handleRestartDeck = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setShowSummary(false);
    setShowInitialProgress(true);
  };

  const handleStartStudying = () => setShowInitialProgress(false);

  // --- Effects ---

  useEffect(() => {
    if (flashcards.length > 0) {
      const progress = flashcards.reduce(
        (acc, card) => {
          const level = getProgressLevel(card.progress);
          if (level === ProgressLevel.MASTERED) acc.mastered++;
          else if (level === ProgressLevel.INTERMEDIATE) acc.intermediate++;
          else acc.beginner++;
          return acc;
        },
        { mastered: 0, intermediate: 0, beginner: 0, total: flashcards.length },
      );
      setDeckProgress(progress);
    }
  }, [flashcards]);

  useEffect(() => {
    if (currentCardIndex >= flashcards.length - 1 && flashcards.length > 0) {
      setShowSummary(true);
    }
  }, [currentCardIndex, flashcards.length]);

  // --- Render ---

  if (isLoading) return <div>Loading flashcards...</div>;
  if (isError) return <div>Error loading flashcards.</div>;
  if (!flashcards.length) return <div>No flashcards in this deck.</div>;

  if (showInitialProgress && !showSummary) {
    return (
      <DeckOverview progress={deckProgress} onStart={handleStartStudying} />
    );
  }

  if (showSummary) {
    return (
      <DeckSummary progress={deckProgress} onRestart={handleRestartDeck} />
    );
  }

  const card = flashcards[currentCardIndex];

  return (
    <div className="w-full max-w-md">
      <Navigation
        current={currentCardIndex}
        total={flashcards.length}
        onPrev={handlePrev}
        onNext={handleNext}
        disablePrev={currentCardIndex === 0}
        disableNext={currentCardIndex === flashcards.length - 1}
      />
      <Flashcard card={card} isFlipped={isFlipped} onFlip={handleFlip} />
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
