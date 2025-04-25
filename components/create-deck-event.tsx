"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/lib/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface CreateEventProps {
  deckId: string;
  deckName: string;
}

/**
 * Component for creating a Google Calendar event based on deck progress
 */
export default function CreateDeckEvent({ deckId, deckName }: CreateEventProps) {
  const api = useTRPC();
  const [isLoading, setIsLoading] = useState(false);
  
  const createEventMutation = useMutation(
    api.deck.createDeckProgressEvent.mutationOptions()
  );

  const createEvent = async () => {
    try {
      setIsLoading(true);
      
      // The deck router will compute the startDateTime based on mastery level
      // We just pass in the current date and it will be adjusted by the server
      const now = new Date();
      
      // Create the calendar event - start time will be adjusted on the server
      // based on the mastery distribution of the deck
      const result = await createEventMutation.mutateAsync({
        deckId,
        eventTitle: `Review: ${deckName}`,
        eventDescription: `Scheduled review for your flashcard deck: ${deckName}`,
        startDateTime: now,
        endDateTime: new Date(now.getTime() + 60 * 60 * 1000), // 1 hour later
      });
      
      toast.success("Event Created", {
        description: `Added a review event to your calendar (${result.progress}% mastery). Check your Google Calendar for timing details.`,
      });
    } catch (error) {
      console.error("Failed to create calendar event:", error);
      toast.error("Error", {
        description: "Could not create calendar event. Please check your Google permissions.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Schedule Review</CardTitle>
        <CardDescription>
          Create a Google Calendar event for reviewing this deck
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This will create a calendar event with timing based on your mastery level in this deck.
          Beginner-level decks will be scheduled sooner, while mastered decks will be scheduled further in the future.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={createEvent} disabled={isLoading}>
          {isLoading ? "Creating..." : "Schedule in Google Calendar"}
        </Button>
      </CardFooter>
    </Card>
  );
}