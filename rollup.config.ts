import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";
import renameNodeModules from "rollup-plugin-rename-node-modules";

function styleSheetEntry(input, output) {
  return {
    input: input,
    plugins: [
      scss({
        output: output,
        sourceMap: true,
        // @ts-ignore
        outputStyle: "compressed",
      }),
    ],
  };
}

export default defineConfig([
  {
    external: ["react", "react-dom"],
    input: "src/index.ts",
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        sourcemap: true,
        preserveModules: true,
      },
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      renameNodeModules("external"),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
  },
  styleSheetEntry("src/components/index.scss", "dist/styles.css"),
  styleSheetEntry("src/defines/fonts.scss", "dist/fonts.css"),
  styleSheetEntry("src/defines/variables.scss", "dist/variables.css"),
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.[s]?css$/], // Exclude stylesheets from type compilation
  },
]);
