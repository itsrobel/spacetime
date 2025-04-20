"use client";
import DeckDashboard from "@/components/deck-dashboard";
import CreateDeck from "@/components/create-deck";
import CreateFlashCard from "@/components/create-flash";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FlashCardTable from "@/components/flashcard-table";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      <div className="w-full ">
        <div className="mb-6 flex items-center gap-4">
          <CreateDeck />
          <CreateFlashCard />
        </div>
        <Tabs defaultValue="decks" className="w-full">
          <TabsList>
            <TabsTrigger value="decks">Decks</TabsTrigger>
            <TabsTrigger value="flash">FlashCards</TabsTrigger>
          </TabsList>
          <DeckDashboard />
          <FlashCardTable />
        </Tabs>
        <div className="mb-6 flex justify-between"></div>
      </div>
    </main>
  );
}
