"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DeckCard from "@/components/deck-card";
import FlashcardView from "@/components/flashcard-view";
import { useIsMobile } from "@/hooks/use-mobile";
import { getAllDecks } from "@/lib/data";
import type { Deck } from "@/lib/types";

export default function DeckDashboard() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [decks] = useState<Deck[]>(getAllDecks());
  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDeckClick = (deck: Deck) => {
    if (isMobile) {
      router.push(`/deck/${deck.id}`);
    } else {
      setSelectedDeck(deck);
      setCurrentCardIndex(0);
      setIsDialogOpen(true);
    }
  };

  const handleNextCard = () => {
    if (selectedDeck && currentCardIndex < selectedDeck.cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedDeck(null);
  };

  return (
    <div className="w-full max-w-6xl">
      <div className="mb-6 flex justify-between">
        <h2 className="text-xl font-semibold">Your Decks</h2>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          New Deck
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {decks.map((deck) => (
          <DeckCard
            key={deck.id}
            deck={deck}
            onClick={() => handleDeckClick(deck)}
          />
        ))}
      </div>

      {/* Desktop Modal View */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{selectedDeck?.title}</DialogTitle>
          </DialogHeader>
          {selectedDeck && selectedDeck.cards.length > 0 && (
            <div className="flex flex-col items-center">
              <FlashcardView
                card={selectedDeck.cards[currentCardIndex]}
                index={currentCardIndex}
                total={selectedDeck.cards.length}
                onNext={handleNextCard}
                onPrev={handlePrevCard}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
