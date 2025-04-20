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
  // const queryKey = getQueryKey(api.flash.getFlash);
  const query = useQuery(api.flash.getFlash.queryOptions());
  const flashcards = query?.data?.flash;
  console.log(flashcards);

  // const query = useQuery({
  //   queryKey: ["getflash"],
  //   queryFn: api.flash.getFlash.useQuery(),
  // });
  // const flashcards = query.data.flash;
  // const { data } = api.flash.getFlash.useQuery(undefined, {
  //    queryKey, // Explicitly set the query key
  //  });

  // const flashcards = data?.flash;

  return (
    <div>
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
      {/* <Dialog */}
      {/*   open={!!selectedDeck} */}
      {/*   onOpenChange={(open) => setSelectedDeck(open ? selectedDeck : "")} */}
      {/* > */}
      {/*   {deck && ( */}
      {/*     <DialogContent> */}
      {/*       <DialogHeader> */}
      {/*         <DialogTitle>{deck.name}</DialogTitle> */}
      {/*       </DialogHeader> */}
      {/*     </DialogContent> */}
      {/*   )} */}
      {/* </Dialog> */}
    </div>
  );
}
