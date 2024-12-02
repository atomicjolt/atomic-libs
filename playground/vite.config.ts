import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "playground",
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(
        __dirname,
        "../packages/atomic-elements/src/components"
      ),
      "@hooks": path.resolve(__dirname, "../packages/atomic-elements/src/hooks"),
      "@styles": path.resolve(__dirname, "../packages/atomic-elements/src/styles"),
      "@utils": path.resolve(__dirname, "../packages/atomic-elements/src/utils"),
      "@sb": path.resolve(__dirname, "../.storybook/utils"),
    },
  },
});
