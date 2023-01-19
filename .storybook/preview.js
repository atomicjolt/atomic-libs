import props from './props'
import { CenterDecorator } from '../src/components/storybook';
import "../src/defines/fonts.scss";
import "../src/defines/variables.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  cssprops: props,
  docs: {
    source: {
      type: "dynamic",
      excludeDecorators: true,
    },
  },
};



export const argTypes = {
  className: {
    control: 'text',
    table: {
      category: 'Common',
    }
  }
}



