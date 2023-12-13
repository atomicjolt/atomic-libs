import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import pkg from "./package.json";

const formatEntryPoint = (format) => ({
  input: "src/index.ts",
  external: ["react", "react-dom", ...Object.keys(pkg.dependencies)],
  output: [
    {
      dir: `dist/${format}`,
      format: format,
      sourcemap: true,
      preserveModules: format === "esm",
      sourcemapPathTransform: (relativeSourePath) => {
        return relativeSourePath.slice(3);
      },
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      compilerOptions: {
        outDir: `dist/${format}`,
        declarationDir: `dist/${format}/types`,
      },
    }),
  ],
});

export default defineConfig([
  formatEntryPoint("esm"),
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.[s]?css$/], // Exclude stylesheets from type compilation
  },
]);
