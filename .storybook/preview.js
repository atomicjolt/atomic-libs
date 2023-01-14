import { themes } from "@storybook/theming";
import props from './props'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  cssprops: props
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
