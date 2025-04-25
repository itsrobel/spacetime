"use client";

import * as React from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

export interface ComboboxItem {
  value: string;
  label: string;
}

interface MultiSelectComboboxProps {
  items: ComboboxItem[];
  title?: string;
  placeholder?: string;
  emptyMessage?: string;
  searchPlaceholder?: string;
  value: string[]; // Controlled value
  onChange: (values: string[]) => void; // Controlled change
}

export function MultiSelectCombobox({
  items,
  title = "Select Decks",
  placeholder = "No items selected",
  emptyMessage = "No item found.",
  searchPlaceholder = "Search item...",
  value,
  onChange,
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
    <Popover open={open} onOpenChange={setOpen}>
      <div className="flex flex-col gap-2 w-full">
        <PopoverTrigger asChild>
          <button
            type="button"
            className={cn(
              "w-full min-h-[38px] border rounded-md p-1 flex flex-wrap gap-1 text-left bg-background",
              value.length === 0 && "text-muted-foreground",
            )}
            onClick={() => setOpen(true)}
          >
            {value.length === 0 ? (
              <span className="text-sm p-1.5">{placeholder}</span>
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
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(val);
                    }}
                  />
                </Badge>
              ))
            )}
          </button>
        </PopoverTrigger>

        <PopoverContent
          className="w-[var(--radix-popover-trigger-width)] p-0"
          align="start"
        >
          <Command>
            <CommandInput placeholder={searchPlaceholder} className="h-9" />
            <CommandList>
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup>
                {items.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={() => handleSelect(item.value)}
                  >
                    {item.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value.includes(item.value)
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </div>
    </Popover>
  );
}
