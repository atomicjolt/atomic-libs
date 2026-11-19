import React from "react";
import { Preview } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks";
import { CssPropsBlock } from "@ljcl/storybook-addon-cssprops";

import { defaultTheme } from "../packages/atomic-elements/src/styles";
import { ElementsProvider } from "../packages/atomic-elements/src/components/ElementsProvider";

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
