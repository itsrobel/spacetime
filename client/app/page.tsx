import DeckDashboard from "@/components/deck-dashboard"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Flashcard Decks</h1>
      <p className="mb-8 text-center text-muted-foreground">Study with spaced repetition to improve your memory</p>
      <DeckDashboard />
    </main>
  )
}

