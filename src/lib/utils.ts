import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phoneNumber: string) {
  const cleaned = phoneNumber.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return phoneNumber;
}

export function generateMetadata({
  title,
  description,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  noIndex?: boolean;
}) {
  return {
    title: title ? `${title} | Attune` : "Attune - Find Your Mental Health Provider",
    description:
      description ||
      "A comprehensive directory to connect you with therapists, counselors, and psychologists",
    robots: noIndex ? "noindex, nofollow" : "index, follow",
  };
} 