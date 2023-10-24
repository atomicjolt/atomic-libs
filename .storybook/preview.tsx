import React from "react";
import props from "./props";
import { Preview } from "@storybook/react";

import { LoadFonts } from "../src/styles/fonts";
import { CssVariables } from "../src/styles/variables";
import { CssGlobalDefaults } from "../src/styles/globals";

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
          ]}
        />
        <CssVariables />
        <CssGlobalDefaults />
        <Story />
      </>
    ),
  ],
  argTypes: {
    className: {
      control: "text",
      table: {
        category: "Common",
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        date: /date/,
        text: /className/,
      },
    },
    cssprops: props,
    options: {
      storySort: {
        order: ["Introduction", "Installation", "Usage", "Buttons", "Inputs"],
      },
    },
  },
};

export default preview;
