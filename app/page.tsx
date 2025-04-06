"use client";
import { Deck, Flash } from "@/prisma/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";

import DeckCard from "@/components/deck-card";
import FlashcardView from "@/components/flashcard-view";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [decks, setDecks] = useState<Deck[]>();
  const [flashcards, setFlashCards] = useState<Flash[]>();

  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newDeckDialogOpen, setNewDeckDialogOpen] = useState(false);

  const [newDeckName, setNewDeckName] = useState("");

  const getDeck = async () => {
    const res = await fetch("/api/deck");
    const json = await res.json();
    console.log(json);
    setDecks(json.data);
  };

  const getFlash = async () => {
    const res = await fetch("/api/flash");
    const json = await res.json();
    console.log(json);
    setFlashCards(json.data);
    // setDecks(json.data);
  };

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

  // const handleNextCard = () => {
  //   if (selectedDeck && currentCardIndex < selectedDeck.cards.length - 1) {
  //     setCurrentCardIndex(currentCardIndex + 1);
  //   }
  // };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };
  useEffect(() => {
    if (!decks) {
      getDeck();
      getFlash();
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      <div className="w-full ">
        <div className="mb-6 flex items-center gap-4">
          <Button
            className="gap-2"
            onClick={() => {
              setNewDeckDialogOpen(true);
            }}
          >
            <Plus className="h-4 w-4" />
            Create Deck
          </Button>
          <Button
            variant="outline"
            className="gap-2"
            onClick={async () => {
              const cards = await fetch("/api/flash", {
                method: "POST",
                body: JSON.stringify({
                  deck: selectedDeck?.id,
                  title: "test flash",
                  content: "test flash content",
                }),
              });
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Flash
          </Button>
        </div>

        <Tabs defaultValue="decks" className="w-full">
          <TabsList>
            <TabsTrigger value="decks">Decks</TabsTrigger>
            <TabsTrigger value="flash">FlashCards</TabsTrigger>
          </TabsList>
          <TabsContent value="decks">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {decks &&
                decks.map((deck) => (
                  <DeckCard
                    key={deck.id}
                    deck={deck}
                    onClick={() => handleDeckClick(deck)}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="flash">
            <Table>
              <TableCaption>A list of your flashcards.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Title</TableHead>
                  {/* <TableHead>Status</TableHead> */}
                  {/* <TableHead>Method</TableHead> */}
                  <TableHead className="text-right">Content</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {flashcards &&
                  flashcards.map((flash) => (
                    <TableRow key={flash.id}>
                      <TableCell className="font-medium">
                        {flash.title}
                      </TableCell>
                      {/* <TableCell>{invoice.paymentStatus}</TableCell> */}
                      {/* <TableCell>{invoice.paymentMethod}</TableCell> */}
                      <TableCell className="text-right">
                        {flash.content}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
              {/* <TableFooter> */}
              {/*   <TableRow> */}
              {/*     <TableCell colSpan={3}>Total</TableCell> */}
              {/*     <TableCell className="text-right">$2,500.00</TableCell> */}
              {/*   </TableRow> */}
              {/* </TableFooter> */}
            </Table>
            {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> */}
            {/* </div> */}
          </TabsContent>
        </Tabs>

        <div className="mb-6 flex justify-between"></div>
        {/* Desktop Modal View */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedDeck?.name}</DialogTitle>
            </DialogHeader>
            {selectedDeck && (
              <div className="flex flex-col items-center">
                {!flashcards && <div>create flash</div>}

                {/* <FlashcardView */}
                {/*   card={selectedDeck.cards[currentCardIndex]} */}
                {/*   index={currentCardIndex} */}
                {/*   total={selectedDeck.cards.length} */}
                {/*   onNext={handleNextCard} */}
                {/*   onPrev={handlePrevCard} */}

                {/* /> */}
              </div>
            )}
            <DialogFooter></DialogFooter>
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
    </main>
  );
}
