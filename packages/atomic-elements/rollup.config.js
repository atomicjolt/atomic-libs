import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

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
      tsconfig: "./tsconfig.build.json",
      compilerOptions: {
        baseUrl: "./",
        outDir: `dist/${format}`,
        declarationDir: `dist/${format}/types`,
        plugins: [
          { transform: "typescript-transform-paths", afterDeclarations: true },
        ],
      },
    }),
  ],
});

export default defineConfig([formatEntryPoint("esm"), formatEntryPoint("cjs")]);
