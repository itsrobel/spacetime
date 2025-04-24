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
      
      // Set event time to now + 1 hour
      const startDateTime = new Date();
      startDateTime.setHours(startDateTime.getHours() + 1);
      
      // Event duration is 1 hour
      const endDateTime = new Date(startDateTime);
      endDateTime.setHours(endDateTime.getHours() + 1);
      
      // Create the calendar event
      const result = await createEventMutation.mutateAsync({
        deckId,
        eventTitle: `Review: ${deckName}`,
        eventDescription: `Scheduled review for your flashcard deck: ${deckName}`,
        startDateTime,
        endDateTime,
      });
      
      toast.success("Event Created", {
        description: `Added a review event to your calendar. Current progress: ${result.progress}%`,
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
          This will create a calendar event based on your current progress with this deck.
          The event will be scheduled for one hour from now.
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