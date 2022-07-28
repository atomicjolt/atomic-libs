import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import styles from "rollup-plugin-styles";
import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";

export default defineConfig([
  {
    external: ["react", "react-dom"],
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        format: "esm",
        sourcemap: true,
        preserveModules: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
  },
  {
    input: "src/components/index.scss",
    plugins: [
      scss({
        output: "dist/styles.css",
        sourceMap: true,
        // @ts-ignore
        outputStyle: "compressed",
      }),
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.[s]?css$/], // Exclude stylesheets from type compilation
  },
]);
