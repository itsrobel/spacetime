"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import DeckCard from "@/components/deck-card";
import FlashcardView from "@/components/flashcard-view";
import { useIsMobile } from "@/hooks/use-mobile";
import { getAllDecks } from "@/lib/data";
import type { Deck } from "@/lib/types";

export default function DeckDashboard() {
  // const prisma = new PrismaClient();

  const router = useRouter();
  const isMobile = useIsMobile();
  const [decks] = useState<Deck[]>(getAllDecks());
  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newDeckDialogOpen, setNewDeckDialogOpen] = useState(false);

  const [newDeckName, setNewDeckName] = useState("");

  // const session = await auth();
  // let gId = session?.user?.googleId;

  const handleDeckClick = (deck: Deck) => {
    if (isMobile) {
      router.push(`/deck/${deck.id}`);
    } else {
      setSelectedDeck(deck);
      setCurrentCardIndex(0);
      setIsDialogOpen(true);
    }
  };
  const handleNewDeck = async () => {
    // console.log(newDeckName);
    const res = await fetch("/api/deck", {
      method: "POST",
      body: JSON.stringify({ name: newDeckName }),
    });
    const json = await res.json();
    console.log(json);

    setNewDeckDialogOpen(false);
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

  return (
    <div className="w-full max-w-6xl">
      <div className="mb-6 flex justify-between">
        <h2 className="text-xl font-semibold">Your Decks</h2>
        <Button
          size="sm"
          onClick={() => {
            setNewDeckDialogOpen(true);
          }}
        >
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
        <DialogContent>
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
      <Dialog open={newDeckDialogOpen} onOpenChange={setNewDeckDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Deck</DialogTitle>
            {/* <DialogDescription> */}
            {/*   Create a new changes to your profile here. Click save when you're done. */}
            {/* </DialogDescription> */}
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={newDeckName}
                className="col-span-3"
                onChange={(e) => setNewDeckName(e.target.value)}
              />
            </div>
            {/* maybe add like deck tags or something latter based of subjects */}
            {/* <div className="grid grid-cols-4 items-center gap-4"> */}
            {/*   <Label htmlFor="username" className="text-right"> */}
            {/*     Username */}
            {/*   </Label> */}
            {/*   <Input id="username" value="@peduarte" className="col-span-3" /> */}
            {/* </div> */}
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleNewDeck}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
