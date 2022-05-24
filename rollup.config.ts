import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import styles from "rollup-plugin-styles";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default defineConfig([
  {
    external: ["react", "react/jsx-runtime"],
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      commonjs(),
      babel({
        babelHelpers: "runtime",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      styles(),
      terser(),
    ],
  },
  // {
  //   input: "dist/types/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "esm" }],
  //   plugins: [dts()],
  // },
]);
