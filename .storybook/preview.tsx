import React, { useSyncExternalStore } from "react";
import { Preview } from "@storybook/react";
import {
  DocsContainer,
  DocsContainerProps,
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks";
import { CssPropsBlock } from "@ljcl/storybook-addon-cssprops";
import { themes } from "@storybook/theming";

import { defaultTheme } from "../packages/atomic-elements/src/styles";
import { ElementsProvider } from "../packages/atomic-elements/src/components/ElementsProvider";

/** The scheme ElementsProvider applied to this iframe's <html>, tracked live. */
function useDocumentColorScheme(): string | undefined {
  return useSyncExternalStore(
    (onChange) => {
      const observer = new MutationObserver(onChange);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-color-scheme"],
      });
      return () => observer.disconnect();
    },
    () => document.documentElement.dataset.colorScheme
  );
}

/** Docs (overview) pages use Storybook's dark theme when the stories are dark. */
function ColorSchemeDocsContainer(props: DocsContainerProps) {
  const scheme = useDocumentColorScheme();
  const mode = scheme ? defaultTheme.colorSchemes[scheme]?.mode : undefined;

  return (
    <DocsContainer
      {...props}
      theme={mode === "dark" ? themes.dark : themes.light}
    />
  );
}

const preview: Preview = {
  globalTypes: {
    colorScheme: {
      description: "Color scheme for all stories",
      toolbar: {
        title: "Color scheme",
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
          { value: "system", title: "System" },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    colorScheme: "light",
  },

  decorators: [
    (Story, context) => (
      <>
        <ElementsProvider
          theme={defaultTheme}
          applyDefaultStyles
          colorScheme={context.globals.colorScheme ?? "light"}
        >
          <Story />
        </ElementsProvider>
      </>
    ),
  ],

  parameters: {
    controls: {
      matchers: {
        date: /date/,
        text: /className/,
      },
    },
    // cssprops: props,
    options: {
      storySort: {
        order: [
          "Layouts",
          "Typography",
          "Content",
          "Inputs",
          "Buttons",
          "Overlays",
          "Dropdowns",
          "Fields",
        ],
      },
    },
    docs: {
      container: ColorSchemeDocsContainer,
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          {/* @ts-expect-error */}
          <CssPropsBlock />
          <Stories />
        </>
      ),
    },
  },

  tags: ["autodocs"],
};

export default preview;
