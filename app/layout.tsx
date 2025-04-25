import "./globals.css";

import { TRPCReactProvider } from "@/lib/trpc/client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextAuth.js Example",
  description:
    "This is an example site to demonstrate how to use NextAuth.js for authentication",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full min-h-screen w-full flex-col justify-between">
          <Header />
          <main className="mx-auto w-full  flex-auto px-4 py-4 sm:px-6 md:py-6">
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
