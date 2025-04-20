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
  placeholder?: string;
  emptyMessage?: string;
  searchPlaceholder?: string;
  onChange?: (values: string[]) => void;
}

export function MultiSelectCombobox({
  items,
  placeholder = "No items selected",
  emptyMessage = "No item found.",
  searchPlaceholder = "Search item...",
  onChange,
}: MultiSelectComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string[]>([]);

  const getLabel = (val: string) =>
    items.find((item) => item.value === val)?.label || val;

  const removeItem = (val: string) => {
    const newValues = value.filter((item) => item !== val);
    setValue(newValues);
    onChange?.(newValues);
  };

  const handleSelect = (currentValue: string) => {
    const newValues = value.includes(currentValue)
      ? value.filter((v) => v !== currentValue)
      : [...value, currentValue];

    setValue(newValues);
    onChange?.(newValues);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-start gap-2 w-full">
          <PopoverTrigger asChild>
            <div className="w-full min-h-[38px] border rounded-md p-1 flex flex-wrap gap-1">
              {value.length === 0 ? (
                <p className="text-sm text-muted-foreground p-1.5">
                  {placeholder}
                </p>
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
          </PopoverTrigger>
        </div>

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
                    onSelect={handleSelect}
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
