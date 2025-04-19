"use client";
// <-- hooks can only be used in client components
import { api } from "@/lib/trpc/client";

export default function ClientGreetingPage() {
  const greeting = api.flash.getSecretMessage.useQuery();

  if (!greeting.data) return <div>Loading...</div>;
  return <div>{greeting.data}</div>;
}
