"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FlashcardStack from "@/components/flashcard-stack";
import { useIsMobile } from "@/hooks/use-mobile";
import { getDeck } from "@/lib/data";
import type { Deck } from "@/lib/types";

export default function DeckPage() {
  const params = useParams();
  const router = useRouter();
  const isMobile = useIsMobile();
  const [deck, setDeck] = useState<Deck | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const deckData = getDeck(params.id as string);
      setDeck(deckData);
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading deck...</p>
      </div>
    );
  }

  if (!deck) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <p className="mb-4">Deck not found</p>
        <Button onClick={() => router.push("/")}>Back to Dashboard</Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col p-4 md:p-8">
      <div className="mb-6 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push("/")}
          className="mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold md:text-3xl">{deck.title}</h1>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <FlashcardStack deck={deck} />
      </div>
    </div>
  );
}
