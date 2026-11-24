import React from "react";
import { Preview } from "@storybook/react-vite";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/addon-docs/blocks";

import { defaultTheme } from "../packages/atomic-elements/src/styles";
import { ElementsProvider } from "../packages/atomic-elements/src/components/ElementsProvider";
import { CssVariablesTable } from "./utils/CssVariablesTable";

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
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <CssVariablesTable />
          <Stories />
        </>
      ),
    },
  },

  tags: ["autodocs"],
};

export default preview;
