"use client"

import type { Deck } from "./types"

// Sample data for the app
const decks: Deck[] = [
  {
    id: "javascript",
    title: "JavaScript Fundamentals",
    description: "Core concepts of JavaScript programming language",
    cards: [
      {
        id: "js-1",
        front: "What is a closure in JavaScript?",
        back: "A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. It preserves the outer function's scope after the outer function has returned.",
        tags: ["functions", "scope"],
        isDue: true,
      },
      {
        id: "js-2",
        front: "Explain the difference between '==' and '===' in JavaScript.",
        back: "'==' is the equality operator that compares value only, while '===' is the strict equality operator that compares both value and type.",
        tags: ["operators"],
        isDue: true,
      },
      {
        id: "js-3",
        front: "What is hoisting in JavaScript?",
        back: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. Variables defined with 'var' are hoisted to the top of their scope and initialized with 'undefined'.",
        tags: ["variables", "scope"],
        isDue: false,
      },
      {
        id: "js-4",
        front: "What is the event loop in JavaScript?",
        back: "The event loop is a mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It monitors the call stack and callback queue, pushing callbacks from the queue to the stack when it's empty.",
        tags: ["async", "runtime"],
        isDue: true,
      },
      {
        id: "js-5",
        front: "Explain Promise in JavaScript.",
        back: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected. It allows for cleaner async code compared to callbacks.",
        tags: ["async", "promises"],
        isDue: false,
      },
    ],
    progress: 35,
    lastStudied: new Date("2023-04-15"),
    createdAt: new Date("2023-01-10"),
  },
  {
    id: "react",
    title: "React Concepts",
    description: "Modern React patterns and hooks",
    cards: [
      {
        id: "react-1",
        front: "What is JSX?",
        back: "JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code in your JavaScript files for defining React elements.",
        tags: ["basics"],
        isDue: true,
      },
      {
        id: "react-2",
        front: "Explain the difference between state and props in React.",
        back: "Props are passed to a component from its parent and are read-only. State is managed within the component and can be updated using setState() or useState() hook.",
        tags: ["props", "state"],
        isDue: false,
      },
      {
        id: "react-3",
        front: "What is the useEffect hook used for?",
        back: "useEffect is a hook that allows you to perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in class components.",
        tags: ["hooks"],
        isDue: true,
      },
    ],
    progress: 60,
    lastStudied: new Date("2023-04-20"),
    createdAt: new Date("2023-02-15"),
  },
  {
    id: "css",
    title: "CSS & Styling",
    description: "Modern CSS techniques and layouts",
    cards: [
      {
        id: "css-1",
        front: "What is the difference between Flexbox and Grid?",
        back: "Flexbox is one-dimensional and designed for laying out items in a row or column. Grid is two-dimensional and designed for laying out items in rows and columns simultaneously.",
        tags: ["layout"],
        isDue: true,
      },
      {
        id: "css-2",
        front: "Explain the CSS Box Model.",
        back: "The CSS Box Model consists of content, padding, border, and margin. Content is the actual content, padding is space around the content, border surrounds the padding, and margin is space outside the border.",
        tags: ["basics"],
        isDue: false,
      },
    ],
    progress: 25,
    lastStudied: new Date("2023-04-10"),
    createdAt: new Date("2023-03-05"),
  },
  {
    id: "typescript",
    title: "TypeScript Essentials",
    description: "TypeScript types and advanced features",
    cards: [
      {
        id: "ts-1",
        front: "What are the basic types in TypeScript?",
        back: "Basic types in TypeScript include: boolean, number, string, array, tuple, enum, any, void, null, undefined, never, and object.",
        tags: ["basics", "types"],
        isDue: true,
      },
      {
        id: "ts-2",
        front: "What is an interface in TypeScript?",
        back: "An interface is a way to define a contract for an object's shape. It specifies what properties and methods an object must have.",
        tags: ["interfaces"],
        isDue: true,
      },
      {
        id: "ts-3",
        front: "Explain generics in TypeScript.",
        back: "Generics allow you to create reusable components that can work with a variety of types rather than a single one. They help you create type-safe code while maintaining flexibility.",
        tags: ["generics", "advanced"],
        isDue: false,
      },
    ],
    progress: 45,
    lastStudied: new Date("2023-04-18"),
    createdAt: new Date("2023-02-28"),
  },
]

export function getAllDecks(): Deck[] {
  return decks
}

export function getDeck(id: string): Deck | null {
  return decks.find((deck) => deck.id === id) || null
}

