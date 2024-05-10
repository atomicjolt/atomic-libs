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
  argTypes: {
    className: {
      control: "text",
      defaultValue: "",
      table: {
        category: "Presentation",
      },
    },
    id: {
      control: "text",
      description: "The HTML id of the element",
      defaultValue: "",
      table: {
        category: "Common",
      },
    },
    size: {
      control: "select",
      defaultValue: "medium",
      options: ["small", "medium", "large", "full", "auto"],
      table: {
        category: "Presentation",
      },
    },
    "aria-label": {
      control: "text",
      defaultValue: "",
      description: "A label for the current element",
      table: {
        category: "Accessibility",
      },
    },
    "aria-labelledby": {
      control: "text",
      defaultValue: "",
      description:
        "The id of the element that serves as the label for the element",
      table: {
        category: "Accessibility",
      },
    },
    "aria-describedby": {
      control: "text",
      defaultValue: "",
      description:
        "The id of the element that serves as a description for the element",
      table: {
        category: "Accessibility",
      },
    },
    "aria-details": {
      control: "text",
      defaultValue: "",
      description:
        "The id of the element that serves as a details for the element",
      table: {
        category: "Accessibility",
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        date: /date/,
        text: /className/,
      },
    },
    cssprops: props,
    options: {
      storySort: {
        order: ["Introduction", "Installation", "Usage"],
      },
    },
  },
};

export default preview;
