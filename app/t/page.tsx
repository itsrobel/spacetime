"use client";
// <-- hooks can only be used in client components
import { trpc } from "@/lib/trpc/client";

export default function ClientGreetingPage() {
  const greeting = trpc.hello.useQuery({
    text: "this should be a response from the server",
  });
  if (!greeting.data) return <div>Loading...</div>;
  return <div>{greeting.data.greeting}</div>;
}
