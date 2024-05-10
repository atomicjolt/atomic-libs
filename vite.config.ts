import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// TODO: this is currently only used for storybook. Look into using vite for building atomic elements as well.

export default defineConfig({
  plugins: [react()],
});
