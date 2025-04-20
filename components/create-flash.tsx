"use client";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/trpc/client";

export default function CreateFlashCard() {
  const [newFlashDialogOpen, setNewFlashDialogOpen] = useState(false);

  // Combine both fields into one object
  const [form, setForm] = useState({
    name: "",
    content: "",
  });

  const queryClient = useQueryClient();

  const flashMutation = api.flash.createFlash.useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["flash.getFlash"],
      });
      setNewFlashDialogOpen(false);
      setForm({ name: "", content: "" });
    },
  });

  // Generic handler for any input field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCreateFlash = async (e: React.FormEvent) => {
    e.preventDefault();
    flashMutation.mutate({
      title: form.name,
      content: form.content,
    });
  };

  return (
    <div>
      <Button
        variant="outline"
        className="gap-2"
        onClick={() => setNewFlashDialogOpen(true)}
      >
        <Plus className="mr-2 h-4 w-4" />
        Create Flash
      </Button>

      <Dialog open={newFlashDialogOpen} onOpenChange={setNewFlashDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Deck</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCreateFlash}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={form.name}
                  className="col-span-3"
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="content" className="text-right">
                  Content
                </Label>
                <Input
                  id="content"
                  value={form.content}
                  className="col-span-3"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
