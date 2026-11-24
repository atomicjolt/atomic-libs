import React, { useEffect, useSyncExternalStore } from "react";
import {
  DocsContainer,
  DocsContainerProps,
} from "@storybook/addon-docs/blocks";
import { defaultTheme } from "../../packages/atomic-elements/src/styles";
import { atomicDarkTheme, atomicLightTheme } from "../atomicTheme";
import { ElementsProvider } from "../../packages/atomic-elements/src/components/ElementsProvider";
import {
  ColorSchemeContext,
  ColorSchemeState,
  useColorScheme,
} from "../../packages/atomic-elements/src/components/ColorScheme/ColorScheme.context";

/*
 * A docs page renders many stories, but ElementsProvider expects a single
 * root provider per page: the root owns the page's color scheme, and extra
 * roots warn and fight over it.
 *
 * So on docs pages the docs container renders the one root provider, and
 * each story renders a nested one. Storybook mounts each story in its own
 * React root, so context can't flow from the container to the stories.
 * Instead, two small stores bridge them:
 * - the story decorator (which can read Storybook globals) publishes the
 *   toolbar's color scheme for the root provider to use;
 * - the root provider publishes its color-scheme state, which each story
 *   provides as parent context, making its own provider a nested one.
 */

function createStore<T>(initial: T) {
  let value = initial;
  const listeners = new Set<() => void>();
  return {
    get: () => value,
    set(next: T) {
      if (Object.is(next, value)) return;
      value = next;
      listeners.forEach((listener) => listener());
    },
    subscribe(listener: () => void) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
}

type Store<T> = ReturnType<typeof createStore<T>>;

const requestedScheme = createStore("light");
const rootSchemeState = createStore<ColorSchemeState | null>(null);

function useStore<T>(store: Store<T>) {
  return useSyncExternalStore(store.subscribe, store.get);
}

/** Rendered by the story decorator in docs mode to share the toolbar value. */
export function PublishDocsColorScheme({ value }: { value: string }) {
  useEffect(() => requestedScheme.set(value), [value]);
  return null;
}

/** Inside the root provider: shares its color-scheme state with stories. */
function ShareRootColorScheme() {
  const state = useColorScheme();
  useEffect(() => rootSchemeState.set(state), [state]);
  return null;
}

/**
 * Wraps a docs-page story so its ElementsProvider nests under the docs
 * container's root provider. Waits for the root before rendering.
 */
export function DocsStoryColorScheme({
  children,
}: {
  children: React.ReactNode;
}) {
  const state = useStore(rootSchemeState);
  if (!state) return null;
  return (
    <ColorSchemeContext.Provider value={state}>
      {children}
    </ColorSchemeContext.Provider>
  );
}

/** Whether the OS prefers a dark color scheme, kept up to date. */
function usePrefersDark() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

/**
 * Native controls (scrollbars, form fields) follow the CSS color-scheme
 * property. The library sets it on the page root for the components' scheme;
 * on docs pages, put the page back on the UI's scheme and apply the
 * components' scheme only inside the story previews. These rules are
 * unlayered, so they win over the library's layered styles.
 */
function DocsColorSchemeStyles({ uiMode }: { uiMode: "light" | "dark" }) {
  const state = useStore(rootSchemeState);
  const name = state?.resolvedColorScheme ?? "light";
  const storyMode = defaultTheme.colorSchemes[name]?.mode ?? "light";
  return (
    <style>{`
      :root { color-scheme: ${uiMode}; }
      .docs-story { color-scheme: ${storyMode}; }
      /* The library's default styles give the body the components'
         background in dark schemes; on docs pages the page is Storybook's. */
      body { background-color: transparent; }
    `}</style>
  );
}

/**
 * Docs container that provides the single root ElementsProvider.
 *
 * The docs page itself (text, props tables) uses Storybook's light or dark
 * theme to match the OS, like the rest of Storybook's UI. The toolbar's color
 * scheme only applies to the components in the story previews.
 */
export function ElementsDocsContainer(props: DocsContainerProps) {
  const colorScheme = useStore(requestedScheme);
  const uiDark = usePrefersDark();

  return (
    <DocsContainer
      {...props}
      theme={uiDark ? atomicDarkTheme : atomicLightTheme}
    >
      <ElementsProvider
        theme={defaultTheme}
        applyDefaultStyles
        colorScheme={colorScheme}
      >
        <ShareRootColorScheme />
        <DocsColorSchemeStyles uiMode={uiDark ? "dark" : "light"} />
        {props.children}
      </ElementsProvider>
    </DocsContainer>
  );
}
