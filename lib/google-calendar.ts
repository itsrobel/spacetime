/**
 * Google Calendar API Integration
 * Uses the access token from the NextAuth session to create calendar events
 */

type EventParams = {
  summary: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  timeZone?: string;
};

/**
 * Creates a Google Calendar event using the user's access token
 */
export async function createCalendarEvent(
  accessToken: string,
  params: EventParams
) {
  const { summary, description, startDateTime, endDateTime, timeZone = 'UTC' } = params;

  // Format the event according to Google Calendar API requirements
  const event = {
    summary,
    description,
    start: {
      dateTime: startDateTime.toISOString(),
      timeZone,
    },
    end: {
      dateTime: endDateTime.toISOString(),
      timeZone,
    },
  };

  try {
    const response = await fetch(
      'https://www.googleapis.com/calendar/v3/calendars/primary/events',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Calendar API error: ${errorData.error?.message || response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating calendar event:', error);
    throw error;
  }
}

/**
 * Calculates progress for a deck based on the flashcards' progress
 * @param flashcards Array of flashcards with progress properties
 * @returns A number between 0 and 100 representing overall progress percentage
 */
export function calculateDeckProgress(flashcards: any[]) {
  if (!flashcards || flashcards.length === 0) {
    return 0;
  }

  const progressMap = {
    BEGIN: 0,
    INTERM: 50,
    MASTERY: 100,
  };

  // Calculate the sum of progress values
  const progressSum = flashcards.reduce((sum, card) => {
    // Default to BEGIN if progress is not defined
    const progress = card.progress || 'BEGIN';
    return sum + (progressMap[progress as keyof typeof progressMap] || 0);
  }, 0);

  // Calculate the average progress
  return Math.round(progressSum / flashcards.length);
}