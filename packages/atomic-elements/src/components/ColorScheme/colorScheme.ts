import type { ColorSchemeMode, Theme } from "@styles/theme";

/** Requesting this follows the OS light/dark preference. */
export const SYSTEM_COLOR_SCHEME = "system";

/**
 * The scheme to apply for a requested name. `"system"` picks the scheme named
 * after the OS preference (`dark` / `light`), else the first scheme with that
 * mode. Unknown names, and no match, fall back to the theme's base scheme.
 */
export function resolveColorScheme(
  theme: Theme,
  requested: string,
  prefersDark: boolean
): string {
  const schemes = theme.colorSchemes;

  if (requested !== SYSTEM_COLOR_SCHEME) {
    return requested in schemes ? requested : theme.baseColorScheme;
  }

  const mode: ColorSchemeMode = prefersDark ? "dark" : "light";
  if (mode in schemes) return mode;

  const byMode = Object.entries(schemes).find(
    ([, scheme]) => scheme.mode === mode
  );
  return byMode ? byMode[0] : theme.baseColorScheme;
}

/** Whether a requested name is something a theme can show. */
export function isKnownColorScheme(theme: Theme, requested: string): boolean {
  return requested === SYSTEM_COLOR_SCHEME || requested in theme.colorSchemes;
}

let mountedProviders = 0;

/**
 * Registers a top-level provider that controls `<html data-color-scheme>`.
 * `alreadyMounted` is true when another top-level provider is mounted (only
 * one should be). `release` removes the attribute once no providers remain.
 */
export function acquireDocumentColorScheme(): {
  release: () => void;
  alreadyMounted: boolean;
} {
  const alreadyMounted = mountedProviders > 0;
  mountedProviders += 1;
  let released = false;

  return {
    alreadyMounted,
    release: () => {
      if (released) return;
      released = true;
      mountedProviders -= 1;
      if (mountedProviders === 0) {
        delete document.documentElement.dataset.colorScheme;
      }
    },
  };
}

export function setDocumentColorScheme(name: string): void {
  document.documentElement.dataset.colorScheme = name;
}
