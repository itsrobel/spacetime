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
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

import DeckCard from "@/components/deck-card";
import { useIsMobile } from "@/hooks/use-mobile";

const fetchData = async (url: string) => {
  const res = await fetch(url);
  const json = await res.json();
  return json.data;
};

const DeckDialog = ({
  isOpen,
  onClose,
  selectedDeck,
}: {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
  selectedDeck: Deck | null;
}) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{selectedDeck?.name}</DialogTitle>
      </DialogHeader>
      {selectedDeck && (
        <div className="flex flex-col items-center">
          {/* Add FlashcardView or relevant content here */}
        </div>
      )}
      <DialogFooter></DialogFooter>
    </DialogContent>
  </Dialog>
);

const FlashDialog = ({
  isOpen,
  onClose,
  selectedFlash,
}: {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
  selectedFlash: Flash | null;
}) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{selectedFlash?.title}</DialogTitle>
      </DialogHeader>
      {selectedFlash && (
        <div className="flex flex-col items-center">
          {selectedFlash?.id}
          {/* Add FlashcardView or relevant content here */}
        </div>
      )}
      <DialogFooter></DialogFooter>
    </DialogContent>
  </Dialog>
);

const CreateFlashDialog = ({
  isOpen,
  onClose,
  onSave,
}: {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
  onSave: (title: string, content: string) => void;
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    onSave(title, content);
    setTitle("");
    setContent("");
    onClose(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Flash</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="deck-name" className="text-right">
              title
            </Label>
            <Input
              id="deck-name"
              value={title}
              className="col-span-3"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="deck-name" className="text-right">
              content
            </Label>
            <Input
              id="deck-name"
              value={content}
              className="col-span-3"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const CreateDeckDialog = ({
  isOpen,
  onClose,
  onSave,
}: {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
  onSave: (deckName: string) => void;
}) => {
  const [deckName, setDeckName] = useState("");

  const handleSave = () => {
    onSave(deckName);
    setDeckName("");
    onClose(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Deck</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="deck-name" className="text-right">
              Name
            </Label>
            <Input
              id="deck-name"
              value={deckName}
              className="col-span-3"
              onChange={(e) => setDeckName(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const DeckGrid = ({ decks }: { decks: Deck[] | undefined }) => {
  const router = useRouter();
  const isMobile = useIsMobile();

  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);
  const [isDeckDialogOpen, setIsDeckDialogOpen] = useState(false);

  const handleDeckClick = (deck: Deck) => {
    if (isMobile) {
      router.push(`/deck/${deck.id}`);
    } else {
      setSelectedDeck(deck);
      setIsDeckDialogOpen(true);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {decks?.map((deck) => (
          <DeckCard
            key={deck.id}
            deck={deck}
            onClick={() => handleDeckClick(deck)}
          />
        ))}
      </div>

      <DeckDialog
        isOpen={isDeckDialogOpen}
        onClose={setIsDeckDialogOpen}
        selectedDeck={selectedDeck}
      />
    </div>
  );
};
const FlashcardTable = ({
  flashcards,
}: {
  flashcards: Flash[] | undefined;
}) => {
  // const router = useRouter();
  const isMobile = useIsMobile();

  const [selectedFlash, setSelectedFlash] = useState<Flash | null>(null);

  const [isFlashDialogOpen, setIsFlashDialogOpen] = useState(false);

  const handleFlashClick = (flash: Flash) => {
    if (isMobile) {
      console.log("create mobile page");
      // router.push(`/deck/${deck.id}`);
    } else {
      setSelectedFlash(flash);
      setIsFlashDialogOpen(true);
    }
  };
  // const addToDeck = () = {
  //
  // }

  return (
    <div>
      <Table>
        <TableCaption>A list of your flashcards.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell className="text-right">Content</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {flashcards?.map((flash) => (
            <TableRow key={flash.id} onClick={() => handleFlashClick(flash)}>
              <TableCell>{flash.title}</TableCell>
              <TableCell className="text-right">{flash.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <FlashDialog
        isOpen={isFlashDialogOpen}
        onClose={setIsFlashDialogOpen}
        selectedFlash={selectedFlash}
      />
    </div>
  );
};

export default function Home() {
  const [decks, setDecks] = useState<Deck[]>();
  const [flashcards, setFlashcards] = useState<Flash[]>();
  const [isNewDeckDialogOpen, setIsNewDeckDialogOpen] = useState(false);
  const [isNewFlashDialogOpen, setIsNewFlashDialogOpen] = useState(false);

  const loadData = async () => {
    if (!decks || !flashcards) {
      setDecks(await fetchData("/api/deck"));
      setFlashcards(await fetchData("/api/flash"));
    }
  };

  const handleCreateNewDeck = async (name: string) => {
    await fetch("/api/deck", {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    setIsNewDeckDialogOpen(false);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      <div className="w-full">
        {/* Action Buttons */}
        <div className="mb-6 flex items-center gap-4">
          <Button onClick={() => setIsNewDeckDialogOpen(true)}>
            <Plus className="h-4 w-4" />
            Create Deck
          </Button>

          <Button onClick={() => setIsNewFlashDialogOpen(true)}>
            <Plus className="h-4 w-4" />
            Create FlashCard
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="decks" className="w-full">
          <TabsList>
            <TabsTrigger value="decks">Decks</TabsTrigger>
            <TabsTrigger value="flash">FlashCards</TabsTrigger>
          </TabsList>

          {/* Decks Tab */}
          <TabsContent value="decks">
            <DeckGrid decks={decks} />
          </TabsContent>

          {/* Flashcards Tab */}
          <TabsContent value="flash">
            <FlashcardTable flashcards={flashcards} />
          </TabsContent>
        </Tabs>

        {/* Modals */}
        <CreateDeckDialog
          isOpen={isNewDeckDialogOpen}
          onClose={setIsNewDeckDialogOpen}
          onSave={handleCreateNewDeck}
        />

        <CreateFlashDialog
          isOpen={isNewFlashDialogOpen}
          onClose={setIsNewFlashDialogOpen}
          onSave={() => {}}
        />
      </div>
    </main>
  );
}
// {selectedDeck && (
//   <div className="flex flex-col items-center">
//     {!flashcards && <div>create flash</div>}
//
{
  /* <FlashcardView */
}
{
  /*   card={selectedDeck.cards[currentCardIndex]} */
}
{
  /*   index={currentCardIndex} */
}
{
  /*   total={selectedDeck.cards.length} */
}
{
  /*   onNext={handleNextCard} */
}
{
  /*   onPrev={handlePrevCard} */
}

{
  /* /> */
}
//   </div>
// )}
