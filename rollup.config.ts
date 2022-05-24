import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import scss from "rollup-plugin-scss";
import styles from "rollup-plugin-styles";
import { babel } from "@rollup/plugin-babel";

const packageJson = require("./package.json");

export default defineConfig([
  {
    external: ["react", "react/jsx-runtime"],
    input: "src/index.ts",
    output: [
      // {
      //   dir: "dist/cjs",
      //   format: "cjs",
      //   sourcemap: true,
      //   preserveModules: true,
      // },
      {
        dir: "dist",
        format: "esm",
        sourcemap: true,
        preserveModules: true,
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
      // scss({
      //   sourceMap: true,
      //   sass: require("sass"),
      // }),
      styles(),
    ],
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
]);
