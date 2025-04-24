"use client";

import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/lib/trpc/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Flash } from "@/prisma/client";
import { TabsContent } from "@/components/ui/tabs";
export default function FlashCardTable() {
  const api = useTRPC();
  const flashcards = useQuery(api.flash.getFlash.queryOptions())?.data?.flash;
  //TODO: fetch decks given the flashID

  return (
    <div>
      <TabsContent value="flash">
        <Table>
          <TableCaption>A list of your flashcards.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Title</TableHead>
              <TableHead className="text-right">Content</TableHead>
              <TableHead className="text-right">Decks</TableHead>
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
                  <TableCell className="text-right">
                    {/*TODO: multi table delete */}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TabsContent>
    </div>
  );
}
