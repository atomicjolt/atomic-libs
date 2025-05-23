import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input:
    "https://gitlab.com/lauraschauer/canvas-openapi-specification/-/raw/main/openapi-specs/openapi3.yaml",
  output: "./src/generated",
  plugins: ["@hey-api/client-fetch"],
});
