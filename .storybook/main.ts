import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../packages/atomic-elements/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@ljcl/storybook-addon-cssprops",
    // "@storybook/addon-mdx-gfm"
  ],

  staticDirs: ["../public"],

  framework: {
    name: "@storybook/react-vite",
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
  },
};

export default config;
