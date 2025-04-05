import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const binaryToHex = (binary: Uint8Array): string => {
  return Array.from(binary)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};
