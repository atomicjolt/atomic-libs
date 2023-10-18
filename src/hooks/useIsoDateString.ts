import { useMemo } from "react";

export function useIsoDateString(date?: string | Date | number): string {
  return useMemo(() => {
    if (!date) return "";

    if (typeof date == "string" || typeof date == "number") {
      date = new Date(date);
    }

    return date.toISOString().slice(0, 16);
  }, [date]);
}
