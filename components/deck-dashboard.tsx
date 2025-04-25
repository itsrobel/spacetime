"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TabsContent } from "@/components/ui/tabs";

import DeckCard from "@/components/deck-card";
import CreateDeckEvent from "@/components/create-deck-event";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

import { useTRPC } from "@/lib/trpc/client";

import { useIsMobile } from "@/hooks/use-mobile";

import { useQuery } from "@tanstack/react-query";
import FlashcardView from "./flashcard-view";

export default function DeckDashboard() {
  const api = useTRPC();
  const decks = useQuery(api.deck.getDecks.queryOptions()).data?.decks;
  const isMobile = useIsMobile();
  const router = useRouter();

  const [selectedDeck, setSelectedDeck] = useState("");
  const deck = decks?.find((item) => item.id == selectedDeck);

  const handleDeckClick = (deck_id: string) => {
    // if (isMobile) {
    //   router.push(`/deck/${deck_id}`);
    // } else {
    setSelectedDeck(deck_id);
    // }
  };
  return (
    <div>
      <TabsContent value="decks">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
          {decks &&
            decks.map((deck) => (
              <DeckCard
                key={deck.id}
                title={deck.name}
                onClick={() => handleDeckClick(deck.id)}
              />
            ))}
        </div>
      </TabsContent>

      <Dialog
        open={!!selectedDeck}
        onOpenChange={(open) => setSelectedDeck(open ? selectedDeck : "")}
      >
        {deck && (
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{deck.name}</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex-1">
                <FlashcardView deck_id={deck.id} />
              </div>
              <div className="w-full md:w-80">
                <CreateDeckEvent deckId={deck.id} deckName={deck.name} />
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
