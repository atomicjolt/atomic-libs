import React, { useEffect, useSyncExternalStore } from "react";
import {
  DocsContainer,
  DocsContainerProps,
} from "@storybook/addon-docs/blocks";
import { defaultTheme } from "../../packages/atomic-elements/src/styles";
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

/** Docs container that provides the single root ElementsProvider. */
export function ElementsDocsContainer(props: DocsContainerProps) {
  const colorScheme = useStore(requestedScheme);

  return (
    <DocsContainer {...props}>
      <ElementsProvider
        theme={defaultTheme}
        applyDefaultStyles
        colorScheme={colorScheme}
      >
        <ShareRootColorScheme />
        {props.children}
      </ElementsProvider>
    </DocsContainer>
  );
}
