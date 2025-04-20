"use client";;
// <-- hooks can only be used in client components
import { useTRPC } from "@/lib/trpc/client";

import { useQuery } from "@tanstack/react-query";

export default function ClientGreetingPage() {
  const api = useTRPC();
  const greeting = useQuery(api.flash.getUser.queryOptions());
  console.log(useQuery(api.flash.getFlash.queryOptions()).data?.flash);

  if (!greeting.data) return <div>Loading...</div>;
  return <div>{greeting.data.user.name}</div>;
}
