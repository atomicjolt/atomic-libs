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

import {
  LoadFonts,
  CssVariables,
  CssGlobalDefaults,
} from "../packages/atomic-elements/src/styles";

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <LoadFonts
          fonts={[
            "lato",
            "material-icons",
            "material-icons-outlined",
            "material-icons-round",
            "material-icons-sharp",
            "material-icons-two-tone",
            "material-symbols-outlined",
            "material-symbols-rounded",
            "material-symbols-sharp",
          ]}
        />
        <CssVariables />
        <CssGlobalDefaults />
        <Story />
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
