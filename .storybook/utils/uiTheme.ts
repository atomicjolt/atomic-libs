/*
 * The Storybook UI theme setting: light, dark, or follow the OS ("system").
 *
 * This is only Storybook's own look (sidebar, toolbar, docs pages). The
 * toolbar's "Color scheme" global is separate and only affects the
 * components being previewed.
 *
 * The setting is saved in localStorage so it survives reloads. The manager
 * (where the toggle lives) and the preview iframe (which renders docs pages)
 * are the same origin, so a change in one fires a `storage` event in the
 * other and both stay in sync.
 */

export type UiThemeSetting = "light" | "dark" | "system";

const STORAGE_KEY = "atomic-elements:storybook-theme";
// `storage` events only reach *other* documents; this one is for our own.
const CHANGE_EVENT = "atomic-elements:storybook-theme-change";
const DARK_QUERY = "(prefers-color-scheme: dark)";

export function getUiThemeSetting(): UiThemeSetting {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : "system";
  } catch {
    // Storage can be unavailable (e.g. blocked site data).
    return "system";
  }
}

export function setUiThemeSetting(setting: UiThemeSetting) {
  try {
    if (setting === "system") window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, setting);
  } catch {
    // Not saved; it still applies until the page reloads.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Whether the given setting (default: the saved one) resolves to dark. */
export function isUiDark(setting: UiThemeSetting = getUiThemeSetting()) {
  return (
    setting === "dark" ||
    (setting === "system" && window.matchMedia(DARK_QUERY).matches)
  );
}

/**
 * Calls `onChange` whenever the resolved UI theme may have changed: the
 * setting changed here or in another frame, or the OS preference changed.
 */
export function subscribeUiTheme(onChange: () => void) {
  const query = window.matchMedia(DARK_QUERY);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) onChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(CHANGE_EVENT, onChange);
  query.addEventListener("change", onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CHANGE_EVENT, onChange);
    query.removeEventListener("change", onChange);
  };
}
