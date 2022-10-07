import { themes } from "@storybook/theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const argTypes = {
  className: {
    control: 'text',
    table: {
      category: 'Common',
    }
  }
}

import "../src/components/index.scss";
import "../src/defines/fonts.scss";
import "../src/defines/variables.scss";
