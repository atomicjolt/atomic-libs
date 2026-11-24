import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../packages/atomic-elements/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/atomic-elements/src/**/*.mdx",
  ],

  addons: ["@storybook/addon-links", "@storybook/addon-docs"],

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
    // These options replace Storybook's defaults rather than extending them,
    // so restate the defaults we rely on.
    reactDocgenTypescriptOptions: {
      // Report `boolean | undefined` as `boolean`, so optional props get a
      // matching control instead of a JSON object editor.
      shouldRemoveUndefinedFromOptional: true,
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
