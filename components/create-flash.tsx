"use client";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

import { useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/trpc/client";
export default function CreateFlashCard() {
  const queryClient = useQueryClient();

  const flashMutation = api.flash.createFlash.useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["flash.getFlash"],
      });
    },
  });
  const handleCreateFlash = async () => {
    flashMutation.mutate({ title: "flash", content: "trpc" });
  };
  return (
    <div>
      <Button variant="outline" className="gap-2" onClick={handleCreateFlash}>
        <Plus className="mr-2 h-4 w-4" />
        Create Flash
      </Button>
    </div>
  );
}
