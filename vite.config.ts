/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// TODO: this is currently only used for storybook. Look into using vite for building atomic elements as well.

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["storybook", "sb-vite"],
    noDiscovery: true,
    include: [],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
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
