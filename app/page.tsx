import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import DeckDash from "@/components/deck-dashboard";

export default async function Home() {
  const hello = await api.flash.hello({ text: "from tRPC" });
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      {/* <HydrateClient> */}
      <DeckDash />
      {/* </HydrateClient> */}
    </main>
  );
}
