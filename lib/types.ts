export interface Flashcard {
  id: string;
  title: string;
  content: string;
  progress?: string;
  consecutiveCorrect?: number;
  tags?: string[];
  lastReviewed?: Date;
  nextReview?: Date;
  isDue?: boolean;
  difficulty?: number; // 0-4 scale, 0 = easy, 4 = hard
}

export interface Deck {
  id: string;
  title: string;
  description: string;
  cards: Flashcard[];
  progress?: number; // 0-100
  lastStudied?: Date;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
