"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/lib/trpc/client";
import { useMutation } from "@tanstack/react-query";
export default function CreateDeck() {
  const api = useTRPC();
  const [newDeckDialogOpen, setNewDeckDialogOpen] = useState(false);
  const [newDeckName, setNewDeckName] = useState("");

  const queryClient = useQueryClient();
  const handleNewDeck = async () => {
    deckMutation.mutate({ title: newDeckName });
  };

  const deckMutation = useMutation(
    api.deck.createDeck.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["deck.getDecks"],
        });
        setNewDeckName("");
      },
    }),
  );

  // const handlePrevCard = () => {
  //   if (currentCardIndex > 0) {
  //     setCurrentCardIndex(currentCardIndex - 1);
  //   }
  // };
  // const handleNextCard = () => {
  //   if (selectedDeck && currentCardIndex < selectedDeck.cards.length - 1) {
  //     setCurrentCardIndex(currentCardIndex + 1);
  //   }
  // };
  return (
    <div>
      <Button
        className="gap-2"
        onClick={() => {
          setNewDeckDialogOpen(true);
        }}
      >
        <Plus className="h-4 w-4" />
        Create Deck
      </Button>

      <Dialog open={newDeckDialogOpen} onOpenChange={setNewDeckDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Deck</DialogTitle>
          </DialogHeader>
          {/* maybe add like deck tags or something latter based of subjects */}
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
