/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

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
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@sb": path.resolve(__dirname, ".storybook/utils"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
