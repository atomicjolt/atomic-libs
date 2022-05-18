import { useEffect, useMemo, useState } from "react";
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
