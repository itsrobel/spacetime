"use client";

import { Book, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Deck } from "@/lib/types";

interface DeckCardProps {
  deck: Deck;
  onClick: () => void;
}

export default function DeckCard({ deck, onClick }: DeckCardProps) {
  const progress = deck.progress || 0;
  const dueCards = deck.cards.filter((card) => card.isDue).length;

  return (
    <Card
      className="flex h-full cursor-pointer flex-col transition-all hover:shadow-md"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-1 text-lg">{deck.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex items-center text-sm text-muted-foreground">
          <Book className="mr-1 h-4 w-4" />
          <span>{deck.cards.length} cards</span>
        </div>
        {dueCards > 0 && (
          <div className="mt-2 flex items-center text-sm text-muted-foreground">
            <Clock className="mr-1 h-4 w-4" />
            <span>{dueCards} due</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2">
        <div className="w-full">
          <div className="mb-1 flex justify-between text-xs">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardFooter>
    </Card>
  );
}
