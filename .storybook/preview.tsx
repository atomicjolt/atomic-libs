import React from "react";
import { Preview } from "@storybook/react-vite";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
} from "@storybook/addon-docs/blocks";

import { defaultTheme } from "../packages/atomic-elements/src/styles";
import { ElementsProvider } from "../packages/atomic-elements/src/components/ElementsProvider";
import { CssVariablesTable } from "./utils/CssVariablesTable";
import { fixInferredArgTypes } from "./utils/argTypes";
import { MainControls, StylePropsControls } from "./utils/StylePropsControls";
import {
  DocsStoryColorScheme,
  ElementsDocsContainer,
  PublishDocsColorScheme,
} from "./utils/ElementsDocsContainer";

const preview: Preview = {
  argTypesEnhancers: [fixInferredArgTypes],

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
    (Story, context) => {
      const colorScheme = context.globals.colorScheme ?? "light";

      // Docs pages render many stories, so the root provider lives in the
      // docs container (see ElementsDocsContainer) and each story gets a
      // nested provider that inherits its color scheme.
      if (context.viewMode === "docs") {
        return (
          <>
            <PublishDocsColorScheme value={colorScheme} />
            <DocsStoryColorScheme>
              <ElementsProvider theme={defaultTheme}>
                <Story />
              </ElementsProvider>
            </DocsStoryColorScheme>
          </>
        );
      }

      return (
        <ElementsProvider
          theme={defaultTheme}
          applyDefaultStyles
          colorScheme={colorScheme}
        >
          {/* Story view: the canvas is the components' page, so give it their
              background, whatever Storybook's UI theme is. */}
          <style>
            {
              "body { background-color: var(--background-clr); color: var(--text-clr); }"
            }
          </style>
          <Story />
        </ElementsProvider>
      );
    },
  ],

  parameters: {
    jsx: {
      // Keep code snippets copyable: drop the spy handlers that `action`
      // argTypes inject (they print as `onPress={() => {}}`). Render-prop
      // functions such as `children` are kept.
      filterProps: (value: unknown, key: string) =>
        value !== undefined &&
        !(typeof value === "function" && /^on[A-Z]/.test(key)),
    },
    controls: {
      matchers: {
        date: /date/,
        text: /className/,
      },
    },
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
      container: ElementsDocsContainer,
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <MainControls />
          <StylePropsControls />
          <CssVariablesTable />
          <Stories />
        </>
      ),
    },
  },

  tags: ["autodocs"],
};

export default preview;
