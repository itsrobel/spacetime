"use client";

import { memo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useTRPC } from "@/lib/trpc/client";
import type { Flashcard } from "@/lib/types";

interface FlashcardViewProps {
  deck_id: string;
}

function FlashcardView({ deck_id }: FlashcardViewProps) {
  const api = useTRPC();

  // Fetch flashcards for the deck
  const { data, isLoading, isError } = useQuery(
    api.deck.getFlashCardsInDeck.queryOptions({ deckId: deck_id }),
  );
  const flashcards = data?.flashcards || [];

  // Card index and flip state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Handlers
  const handleFlip = (e: any) => {
    if (e.pointerType === "touch") e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  const handleNext = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex((i) => i + 1);
      setIsFlipped(false);
    }
  };
  const handlePrev = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((i) => i - 1);
      setIsFlipped(false);
    }
  };

  // Loading/Error states
  if (isLoading) return <div>Loading flashcards...</div>;
  if (isError) return <div>Error loading flashcards.</div>;
  if (!flashcards.length) return <div>No flashcards in this deck.</div>;

  const card = flashcards[currentCardIndex];

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
                <h3 className="mb-4 text-xl font-semibold">{card.title}</h3>
                <p className="text-sm text-muted-foreground">
                  Click to reveal answer
                </p>
              </div>
            </CardContent>
            {/* <CardFooter className="border-t p-4 text-sm text-muted-foreground"> */}
            {/*   <div>{card.progress?.join(", ") || ""}</div> */}
            {/* </CardFooter> */}
          </Card>
          {/* Back */}
          <Card
            className={`absolute h-full w-full rotate-y-180 backface-hidden ${!isFlipped ? "invisible" : ""}`}
          >
            <CardContent className="flex h-[calc(100%-60px)] items-center justify-center p-6">
              <div className="text-center">
                <h3 className="mb-4 text-xl font-semibold">{card.content}</h3>
              </div>
            </CardContent>
            {/* <CardFooter className="border-t p-4 text-sm text-muted-foreground"> */}
            {/*   <div>{card.tags?.join(", ") || ""}</div> */}
            {/* </CardFooter> */}
          </Card>
        </div>
      </div>

      {/* Know/Don't Know */}
      <div className="mt-4 flex justify-center space-x-4">
        <Button
          variant="outline"
          className="w-full border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600"
          onClick={handleNext}
        >
          Don't Know
        </Button>
        <Button
          variant="outline"
          className="w-full border-green-200 text-green-500 hover:bg-green-50 hover:text-green-600"
          onClick={handleNext}
        >
          Know
        </Button>
      </div>
    </div>
  );
}

export default memo(FlashcardView);
