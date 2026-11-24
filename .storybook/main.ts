import { fileURLToPath } from "node:url";
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
    reactDocgenTypescriptOptions: {
      // Type-check components with the package's tsconfig, so docgen can
      // resolve its path aliases (@components, @hooks, @styles). Without
      // them, props imported through an alias resolve to nothing: Button,
      // IconButton and ButtonGroup had no props at all.
      tsconfigPath: fileURLToPath(
        new URL("../packages/atomic-elements/tsconfig.json", import.meta.url)
      ),
      // Report `boolean | undefined` as `boolean`, so optional props get a
      // matching control instead of a JSON object editor.
      shouldRemoveUndefinedFromOptional: true,
      shouldExtractLiteralValuesFromEnum: true,
      // Setting propFilter replaces Storybook's default filter.
      propFilter: (prop) => {
        // Leave deprecated props out of the docs. They stay in the types,
        // where the @deprecated tag points people at the replacement.
        if ((prop as { tags?: Record<string, string> }).tags?.deprecated) {
          return false;
        }
        // Storybook's default rule: skip props inherited from node_modules
        // types (HTML attributes etc.).
        return prop.parent ? !/node_modules/.test(prop.parent.fileName) : true;
      },
    },
  },

  docs: {
    defaultName: "Overview",
  },
};

export default config;
