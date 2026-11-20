import { useCallback, useSyncExternalStore } from "react";

const DARK_QUERY = "(prefers-color-scheme: dark)";

/** Whether the OS prefers dark, tracked live. Always false when `enabled` is false. */
export function usePrefersDark(enabled: boolean): boolean {
  const supported =
    enabled &&
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function";

  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!supported) return () => {};
      const query = window.matchMedia(DARK_QUERY);
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    [supported]
  );

  return useSyncExternalStore(
    subscribe,
    () => supported && window.matchMedia(DARK_QUERY).matches,
    () => false
  );
}
