/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "{{environment}}",
    setupFiles: ["./vitest.setup.ts"],
  },
});
