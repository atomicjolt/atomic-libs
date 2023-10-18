import props from "./props";
import { Preview } from "@storybook/react";

import "../src/defines/fonts.scss";
import "../src/defines/variables.scss";

const preview: Preview = {
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
  },
};

export default preview;
