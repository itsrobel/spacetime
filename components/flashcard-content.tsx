"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import type { Flashcard } from "@/lib/types";

interface FlashcardContentProps {
  card: Flashcard;
  isFlipped: boolean;
  index: number;
  total: number;
  onFlip: () => void;
}

export default function FlashcardContent({
  card,
  isFlipped,
  onFlip,
  index,
  total,
}: FlashcardContentProps) {
  const isMobile = useIsMobile();

  return (
    <div
      className="relative h-full w-full perspective"
      onClick={(e) => {
        e.stopPropagation();
        onFlip();
      }}
    >
      <div
        className={`relative h-full w-full duration-500 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Front of card */}
        <Card
          className={`absolute h-full w-full backface-hidden ${isFlipped ? "invisible" : ""} ${isMobile ? "shadow-lg" : ""}`}
        >
          <CardContent
            className={`flex items-center justify-center p-6 ${isMobile ? "h-[calc(100%-50px)]" : "h-[calc(100%-60px)]"}`}
          >
            <div className="text-center">
              <h3
                className={`mb-4 font-semibold ${isMobile ? "text-2xl" : "text-xl"}`}
              >
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isMobile ? "Tap to flip" : "Tap to reveal answer"}
              </p>
            </div>
          </CardContent>
          <CardFooter className="justify-between border-t p-4 text-sm text-muted-foreground">
            <div>
              Card {index + 1} of {total}
            </div>
            <div>{card.tags?.join(", ") || ""}</div>
          </CardFooter>
        </Card>

        {/* Back of card */}
        <Card
          className={`absolute h-full w-full rotate-y-180 backface-hidden ${!isFlipped ? "invisible" : ""} ${isMobile ? "shadow-lg" : ""}`}
        >
          <CardContent
            className={`flex items-center justify-center p-6 ${isMobile ? "h-[calc(100%-50px)]" : "h-[calc(100%-60px)]"}`}
          >
            <div className="text-center">
              <h3
                className={`mb-4 font-semibold ${isMobile ? "text-2xl" : "text-xl"}`}
              >
                {card.content}
              </h3>
            </div>
          </CardContent>
          <CardFooter className="justify-between border-t p-4 text-sm text-muted-foreground">
            <div>
              Card {index + 1} of {total}
            </div>
            <div>{card.tags?.join(", ") || ""}</div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
