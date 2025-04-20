"use client";;
// <-- hooks can only be used in client components
import { useTRPC } from "@/lib/trpc/client";

import { useQuery } from "@tanstack/react-query";

export default function ClientGreetingPage() {
  const api = useTRPC();
  const greeting = useQuery(api.flash.hello.queryOptions({
    text: "this should be a response from the server",
  }));

  if (!greeting.data) return <div>Loading...</div>;
  return <div>{greeting.data.greeting}</div>;
}
