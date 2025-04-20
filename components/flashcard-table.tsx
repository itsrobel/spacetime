"use client";

import { useQueryClient, useQuery } from "@tanstack/react-query";
import { api } from "@/lib/trpc/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Deck, Flash } from "@/prisma/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function FlashCardTable() {
  const flashcards = api.flash.getFlash.useQuery().data?.flash;

  return (
    <TabsContent value="flash">
      <Table>
        <TableCaption>A list of your flashcards.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead className="text-right">Content</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {flashcards &&
            flashcards.map((flash: Flash) => (
              <TableRow
                key={flash.id}
                onClick={() => {
                  console.log(flash.id);
                }}
              >
                <TableCell className="font-medium">{flash.title}</TableCell>
                <TableCell className="text-right">{flash.content}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TabsContent>
  );
}
