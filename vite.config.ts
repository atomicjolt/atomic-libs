/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// TODO: this is currently only used for storybook. Look into using vite for building atomic elements as well.

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      "storybook",
      "sb-vite",
      "@ljcl/storybook-addon-cssprops",
      "@storybook/blocks",
      "@storybook/theming",
      "@stoybook/components",
    ],
    noDiscovery: false,
  },

  resolve: {
    alias: {
      "@components": path.resolve(
        __dirname,
        "packages/atomic-elements/src/components"
      ),
      "@hooks": path.resolve(__dirname, "packages/atomic-elements/src/hooks"),
      "@styles": path.resolve(__dirname, "packages/atomic-elements/src/styles"),
      "@utils": path.resolve(__dirname, "packages/atomic-elements/src/utils"),
      "@sb": path.resolve(__dirname, ".storybook/utils"),
    },
  },
  // @ts-ignore - the reference is not working for some reason
  // so the type is not being picked up
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
