"use client";
// <-- hooks can only be used in client components
import { api } from "@/lib/trpc/client";

export default function ClientGreetingPage() {
  const greeting = api.flash.getUser.useQuery();
  console.log(api.flash.getFlash.useQuery().data?.flash);

  if (!greeting.data) return <div>Loading...</div>;
  return <div>{greeting.data.user.name}</div>;
}
