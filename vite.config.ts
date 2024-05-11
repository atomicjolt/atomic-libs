import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// TODO: this is currently only used for storybook. Look into using vite for building atomic elements as well.

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@sb": path.resolve(__dirname, ".storybook/utils"),
    },
  },
});
