"use client";

import * as React from "react";
import { Check, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export interface ComboboxItem {
  value: string;
  label: string;
}

interface MultiSelectComboboxProps {
  items: ComboboxItem[];
  title?: string;
  value: string[];
  placeholder?: string;
  emptyMessage?: string;
  searchPlaceholder?: string;
  onChange: (values: string[]) => void;
  onSubmit?: () => void; // <-- new optional prop
}

export function MultiSelectCombobox({
  items,
  value,
  title = "Select Decks",
  placeholder = "No items selected",
  emptyMessage = "No item found.",
  searchPlaceholder = "Search item...",
  onChange,
  onSubmit,
}: MultiSelectComboboxProps) {
  const [open, setOpen] = React.useState(false);

  const getLabel = (val: string) =>
    items.find((item) => item.value === val)?.label || val;

  const removeItem = (val: string) => {
    const newValues = value.filter((item) => item !== val);
    onChange(newValues);
  };
  const handleSelect = (currentValue: string) => {
    const newValues = value.includes(currentValue)
      ? value.filter((v) => v !== currentValue)
      : [...value, currentValue];
    onChange(newValues);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-start">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder={searchPlaceholder} className="h-9" />
            <CommandList className="max-h-[300px]">
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup>
                {items.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={handleSelect}
                  >
                    <div className="flex items-center gap-2 w-full">
                      <div
                        className={cn(
                          "flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          value.includes(item.value)
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50",
                        )}
                      >
                        {value.includes(item.value) && (
                          <Check className="h-3 w-3" />
                        )}
                      </div>
                      <span>{item.label}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
          <Button
            className="w-full pb-2 mb-2"
            onClick={() => {
              setOpen(false);
              onSubmit?.();
            }}
          >
            Done
          </Button>
        </DialogContent>
      </Dialog>

      <div className="min-h-[38px] border rounded-md p-1 flex flex-wrap gap-1 min-w-[300px]">
        {value.length === 0 ? (
          <p className="text-sm text-muted-foreground p-1.5">{placeholder}</p>
        ) : (
          value.map((val) => (
            <Badge
              key={val}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {getLabel(val)}
              <X
                className="h-3 w-3 cursor-pointer hover:text-destructive"
                onClick={() => removeItem(val)}
              />
            </Badge>
          ))
        )}
      </div>
    </div>
  );
}
