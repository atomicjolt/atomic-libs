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
  decorators: [
    (Story) => (
      <>
        <ElementsProvider theme={defaultTheme} applyDefaultStyles>
          <Story />
        </ElementsProvider>
      </>
    ),
  ],

  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
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
