"use client";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
} from "@/components/ui/sheet";
import { useQueryClient } from "@tanstack/react-query";
import { useTRPC } from "@/lib/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { MultiSelectCombobox, type ComboboxItem } from "./multiselect-combobox";
import { useQuery } from "@tanstack/react-query";

export default function CreateFlashCard() {
  const api = useTRPC();
  const [newFlashSheetOpen, setNewFlashSheetOpen] = useState(false);
  const decks = useQuery(api.deck.getDecks.queryOptions()).data?.decks;
  const deckOptions = decks?.map((deck) => {
    const dk: ComboboxItem = { value: deck.id, label: deck.name };
    return dk;
  });

  const [form, setForm] = useState({
    name: "",
    content: "",
    deckIds: [] as string[], // New state for selected decks
  });

  const queryClient = useQueryClient();

  const flashMutation = useMutation(
    api.flash.createFlash.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: api.flash.getFlash.queryKey(),
        });
        setNewFlashSheetOpen(false);
        setForm({ name: "", content: "", deckIds: [] });
      },
    }),
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCreateFlash = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.deckIds.length === 0) {
      console.log("select a deck to add this to");
    } else {
      const flash = flashMutation.mutate({
        title: form.name,
        content: form.content,
        decks: form.deckIds,
      });
      console.log(flash);
    }
  };

  return (
    <div>
      <Button
        variant="outline"
        className="gap-2"
        onClick={() => setNewFlashSheetOpen(true)}
      >
        <Plus className="mr-2 h-4 w-4" />
        Create Flash
      </Button>

      <Sheet open={newFlashSheetOpen} onOpenChange={setNewFlashSheetOpen}>
        <SheetContent side="right" className="sm:max-w-[425px]">
          <SheetHeader>
            <SheetTitle>Create New FlashCard</SheetTitle>
          </SheetHeader>
          <form
            onSubmit={handleCreateFlash}
            className="flex flex-col gap-4 h-full"
          >
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={handleInputChange}
                  required
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Content" className="text-right">
                  Content
                </Label>
                <Input
                  id="content"
                  value={form.content}
                  className="col-span-3"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {deckOptions && (
              <MultiSelectCombobox
                items={deckOptions}
                placeholder="No frameworks selected"
                searchPlaceholder="Search framework..."
                emptyMessage="No framework found."
                onChange={(values) => {
                  setForm((prev) => ({ ...prev, deckIds: values }));
                }}
              />
            )}
            <SheetFooter className="bottom-0">
              <Button type="submit">Save changes</Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
}
