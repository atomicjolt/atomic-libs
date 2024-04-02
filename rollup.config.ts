import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const formatEntryPoint = (format) => ({
  input: "src/index.ts",
  external: [/node_modules/],
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
  formatEntryPoint("cjs"),
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.[s]?css$/], // Exclude stylesheets from type compilation
  },
]);
