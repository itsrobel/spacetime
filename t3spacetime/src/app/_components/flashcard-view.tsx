"use client";

import { memo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Flashcard } from "@/lib/types";

interface FlashcardViewProps {
  card: Flashcard;
  index: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
}

function FlashcardView({
  card,
  index,
  total,
  onNext,
  onPrev,
}: FlashcardViewProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = (e: any) => {
    // Prevent default only for touch events to avoid unwanted behaviors
    if (e.pointerType === "touch") {
      e.preventDefault();
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-4 flex justify-between">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrev}
          disabled={index === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="flex items-center text-sm text-muted-foreground">
          {index + 1} of {total}
        </span>
        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          disabled={index === total - 1}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="perspective h-[300px] w-full">
        <div
          className={`relative h-full w-full duration-500 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
          onPointerDown={handleFlip}
        >
          {/* Front of card */}
          <Card
            className={`absolute h-full w-full backface-hidden ${isFlipped ? "invisible" : ""}`}
          >
            <CardContent className="flex h-[calc(100%-60px)] items-center justify-center p-6">
              <div className="text-center">
                <h3 className="mb-4 text-xl font-semibold">{card.front}</h3>
                <p className="text-sm text-muted-foreground">
                  Click to reveal answer
                </p>
              </div>
            </CardContent>
            <CardFooter className="border-t p-4 text-sm text-muted-foreground">
              <div>{card.tags?.join(", ") || ""}</div>
            </CardFooter>
          </Card>

          {/* Back of card */}
          <Card
            className={`absolute h-full w-full rotate-y-180 backface-hidden ${!isFlipped ? "invisible" : ""}`}
          >
            <CardContent className="flex h-[calc(100%-60px)] items-center justify-center p-6">
              <div className="text-center">
                <h3 className="mb-4 text-xl font-semibold">{card.back}</h3>
              </div>
            </CardContent>
            <CardFooter className="border-t p-4 text-sm text-muted-foreground">
              <div>{card.tags?.join(", ") || ""}</div>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="mt-4 flex justify-center space-x-4">
        <Button
          variant="outline"
          className="w-full border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600"
          onClick={() => {
            setIsFlipped(false);
            onNext();
          }}
        >
          Don't Know
        </Button>
        <Button
          variant="outline"
          className="w-full border-green-200 text-green-500 hover:bg-green-50 hover:text-green-600"
          onClick={() => {
            setIsFlipped(false);
            onNext();
          }}
        >
          Know
        </Button>
      </div>
    </div>
  );
}
export default memo(FlashcardView);
