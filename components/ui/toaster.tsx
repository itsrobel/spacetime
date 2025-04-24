"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster 
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast: "group border border-border bg-background text-foreground rounded-md shadow-lg",
          title: "text-sm font-semibold",
          description: "text-sm opacity-90",
          actionButton: "bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md",
          cancelButton: "bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md",
          error: "!bg-destructive !text-destructive-foreground border-none",
          success: "!bg-green-50 !text-green-700 border-green-100"
        }
      }}
    />
  );
}