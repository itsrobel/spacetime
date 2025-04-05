"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import FlashcardContent from "@/components/flashcard-content";
import { useIsMobile } from "@/hooks/use-mobile";
import type { Deck } from "@/lib/types";

interface FlashcardStackProps {
  deck: Deck;
}

export default function FlashcardStack({ deck }: FlashcardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);
  const dragConstraintsRef = useRef(null);
  const isMobile = useIsMobile();

  // Prevent window sliding when swiping cards
  useEffect(() => {
    const preventDefaultTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    const element = dragConstraintsRef.current as unknown as HTMLElement;
    if (element) {
      element.addEventListener("touchmove", preventDefaultTouchMove, {
        passive: false,
      });
    }

    return () => {
      if (element) {
        element.removeEventListener("touchmove", preventDefaultTouchMove);
      }
    };
  }, []);

  // Use arrow functions to preserve 'this' context
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = 100;

    if (info.offset.x > threshold) {
      // Swiped right - "I know"
      handleKnow();
    } else if (info.offset.x < -threshold) {
      // Swiped left - "I don't know"
      handleDontKnow();
    }
  };

  const handleKnow = () => {
    setDirection("right");
    setTimeout(() => {
      nextCard();
    }, 300);
  };

  const handleDontKnow = () => {
    setDirection("left");
    setTimeout(() => {
      nextCard();
    }, 300);
  };

  const nextCard = () => {
    if (currentIndex < deck.cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      setDirection(null);
    } else {
      setCompleted(true);
    }
  };

  const resetDeck = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setDirection(null);
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="mb-4 text-xl font-bold">Deck Completed!</h3>
        <p className="mb-6 text-muted-foreground">
          You've gone through all the cards in this deck.
        </p>
        <Button onClick={resetDeck}>Study Again</Button>
      </div>
    );
  }

  const currentCard = deck.cards[currentIndex];

  return (
    <div
      className={`relative ${isMobile ? "h-[calc(100vh-150px)] w-full" : "h-[500px] w-full max-w-md"}`}
      ref={dragConstraintsRef}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
            x: direction === "left" ? -300 : direction === "right" ? 300 : 0,
          }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          exit={{
            opacity: 0,
            x: direction === "left" ? -300 : direction === "right" ? 300 : 0,
            transition: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={dragConstraintsRef}
          dragElastic={0.7}
          onDragEnd={(e, info) => {
            e.stopPropagation();
            handleDragEnd(e, info);
          }}
          whileDrag={{ scale: 1.02 }}
          className="absolute left-0 top-0 h-full w-full cursor-grab active:cursor-grabbing"
        >
          <FlashcardContent
            card={currentCard}
            isFlipped={isFlipped}
            onFlip={() => setIsFlipped(!isFlipped)}
            index={currentIndex}
            total={deck.cards.length}
          />
        </motion.div>
      </AnimatePresence>

      {/* Swipe indicators - only show on desktop */}
      {!isMobile && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-20">
          <div className="flex flex-col items-center">
            <Button
              variant="outline"
              size="icon"
              className="mb-2 bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600"
              onClick={handleDontKnow}
            >
              <X className="h-5 w-5" />
            </Button>
            <span className="text-xs text-muted-foreground">Don't Know</span>
          </div>
          <div className="flex flex-col items-center">
            <Button
              variant="outline"
              size="icon"
              className="mb-2 bg-green-50 text-green-500 hover:bg-green-100 hover:text-green-600"
              onClick={handleKnow}
            >
              <Check className="h-5 w-5" />
            </Button>
            <span className="text-xs text-muted-foreground">Know</span>
          </div>
        </div>
      )}
    </div>
  );
}
