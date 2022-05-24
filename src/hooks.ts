import { useEffect, useMemo, useRef, useState } from "react";
import { makeIds } from "./utils";

export function useIds(base: string, args: string[], deps: any[] = []) {
  return useMemo(() => makeIds(base, args), deps);
}

export function useClick(callback: (e: MouseEvent) => void, deps: any[]) {
  useEffect(() => {
    window.addEventListener("click", callback);

    return () => window.removeEventListener("click", callback);
  }, deps);
}

export function useBool(initialState: boolean = false): [boolean, () => void] {
  const [bool, setBool] = useState(initialState);

  return [bool, () => setBool(!bool)];
}

export function useIsoDateString(date?: string | Date | number): string {
  return useMemo(() => {
    if (!date) return "";

    if (typeof date == "string" || typeof date == "number") {
      date = new Date(date);
    }

    return date.toISOString().slice(0, 16);
  }, [date]);
}

export function useInitialRender() {
  const isInitialrender = useRef(true);

  useEffect(() => {
    isInitialrender.current = false;
  }, []);

  return isInitialrender.current;
}
