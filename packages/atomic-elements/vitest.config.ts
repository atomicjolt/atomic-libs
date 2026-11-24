import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["storybook", "@storybook/addon-docs"],
    noDiscovery: false,
  },

  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@sb": path.resolve(__dirname, "storybook"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    // Date/time components render in the local zone, so pin it to keep
    // snapshots identical across machines and CI.
    env: {
      TZ: "UTC",
    },
  },
});
