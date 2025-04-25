import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
import { MultiSelectCombobox, type ComboboxItem } from "./multiselect-combobox";
import { Flash } from "@/prisma/client";
import { TabsContent } from "@/components/ui/tabs";

export default function FlashCardTable() {
  const api = useTRPC();
  const queryClient = useQueryClient();

  // Fetch all flashcards
  const { data: flashcardsData } = useQuery(api.flash.getFlash.queryOptions());
  const flashcards = flashcardsData?.flash ?? [];

  // Fetch all decks for the multi-select options
  const { data: allDecksData } = useQuery(api.deck.getDecks.queryOptions());
  const allDeckOptions: ComboboxItem[] =
    allDecksData?.decks?.map((deck) => ({
      value: deck.id,
      label: deck.name,
    })) ?? [];

  // Fetch the mapping from flashcardId to deckIds
  const { data: flashDeckMapData } = useQuery(
    api.flash.getDecks.queryOptions({ flashId: "" }),
  );
  const flashDeckMap: Record<string, string[]> =
    flashDeckMapData?.flashDeckMap ?? {};

  // Local state: track selection for each flashcard
  const [selectionMap, setSelectionMap] = useState<Record<string, string[]>>(
    {},
  );

  // Mutation to update decks for a flashcard
  const updateFlashDecks = useMutation(
    api.flash.updateFlashDecks.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: api.flash.getDecks.queryKey(),
        });
      },
    }),
  );

  // Handler for selection change (update local state only)
  const handleSelectionChange = (flashId: string, deckIds: string[]) => {
    setSelectionMap((prev) => ({
      ...prev,
      [flashId]: deckIds,
    }));
  };

  // Handler for "Done" button (trigger mutation)
  const handleSubmit = (flashId: string) => {
    const selected = selectionMap[flashId];
    const original = flashDeckMap[flashId] ?? [];
    // Only mutate if changed and selection is defined
    if (
      selected &&
      (selected.length !== original.length ||
        selected.some((id) => !original.includes(id)) ||
        original.some((id) => !selected.includes(id)))
    ) {
      updateFlashDecks.mutate({ flashId, deckIds: selected });
    }
  };

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
            {flashcards.map((flash: Flash) => {
              // Use local state if present, else from server
              const selectedDecks =
                selectionMap[flash.id] ?? flashDeckMap[flash.id] ?? [];

              return (
                <TableRow key={flash.id}>
                  <TableCell className="font-medium">{flash.title}</TableCell>
                  <TableCell className="text-right">{flash.content}</TableCell>
                  <TableCell className="text-right">
                    <MultiSelectCombobox
                      title="Select Decks"
                      items={allDeckOptions}
                      value={selectedDecks}
                      placeholder="No decks selected"
                      searchPlaceholder="Search decks..."
                      emptyMessage="No deck found."
                      onChange={(values) =>
                        handleSelectionChange(flash.id, values)
                      }
                      onSubmit={() => handleSubmit(flash.id)}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TabsContent>
    </div>
  );
}
