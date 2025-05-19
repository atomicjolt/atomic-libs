import { dirname, join } from "path";
import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../packages/atomic-elements/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/atomic-elements/src/**/*.mdx",
  ],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@ljcl/storybook-addon-cssprops"),
  ],

  staticDirs: ["../public"],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  core: {
    disableTelemetry: true,
  },

  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        esModuleInterop: false,
      },
      shouldExtractLiteralValuesFromEnum: true,
      // propFilter: (prop) =>
      //   prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },

  docs: {
    defaultName: "Overview",
    autodocs: true,
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
