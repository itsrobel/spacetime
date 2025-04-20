"use client";;
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TabsContent } from "@/components/ui/tabs";

import DeckCard from "@/components/deck-card";
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

export default function DeckDashboard() {
  const api = useTRPC();
  const decks = useQuery(api.deck.getDeck.queryOptions()).data?.decks;
  const isMobile = useIsMobile();
  const router = useRouter();

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedDeck, setSelectedDeck] = useState("");
  const deck = decks?.find((item) => item.id == selectedDeck);

  const handleDeckClick = (deck_id: string) => {
    // if (isMobile) {
    //   router.push(`/deck/${deck_id}`);
    // } else {
    setSelectedDeck(deck_id);
    // console.log(decks?.filter((items) => items.id == deck_id));
    // console.log(decks?.find((item) => item.id == deck_id));
    // setCurrentCardIndex(0);
    // setIsDialogOpen(true);
    // }
  };
  return (
    <div>
      <TabsContent value="decks">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{deck.name}</DialogTitle>
            </DialogHeader>
            {/* {selectedDeck && ( */}
            {/*   <div className="flex flex-col items-center"> */}
            {/*     {!flashcards && <div>create flash</div>} */}

            {/* <FlashcardView */}
            {/*   card={selectedDeck.cards[currentCardIndex]} */}
            {/*   index={currentCardIndex} */}
            {/*   total={selectedDeck.cards.length} */}
            {/*   onNext={handleNextCard} */}
            {/*   onPrev={handlePrevCard} */}

            {/* /> */}
            {/*   </div> */}
            {/* )} */}
            <DialogFooter></DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
