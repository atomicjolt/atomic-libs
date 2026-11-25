import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The playground uses the built packages (`npm run build --workspaces`), the
// same way an app would. Rebuild a package to see changes to it here.
export default defineConfig({
  root: "playground",
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom", "styled-components"],
  },
});
