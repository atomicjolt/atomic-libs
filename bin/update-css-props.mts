import fs from "fs";
import path from "path";
import * as palette from "../packages/atomic-elements/src/styles/theme/palette";
import * as foundations from "../packages/atomic-elements/src/styles/theme/foundations";
import * as semantic from "../packages/atomic-elements/src/styles/theme/semantic";
import * as component from "../packages/atomic-elements/src/styles/theme/component";
import { defaultTheme } from "../packages/atomic-elements/src/styles/theme";

/** Exports whose Storybook group name isn't just the capitalized export name. */
const GROUP_NAMES: Record<string, string> = {
  palette: "Colors",
  semanticColors: "Colors",
  deprecatedColors: "Colors",
};

function main() {
  const props = getCssProps();

  const outputDir = path.join(
    path.dirname(new URL(import.meta.url).pathname),
    "../.storybook/__generated__"
  );
  fs.mkdirSync(outputDir, { recursive: true });

  const outputFilePath = path.join(outputDir, "cssprops.generated.ts");
  fs.writeFileSync(
    outputFilePath,
    `export const cssprops = ${JSON.stringify(props, null, 2)};`
  );

  console.log(`Generated CSS props to ${outputFilePath}`);
}

function getCssProps() {
  const cssProps: Record<string, any> = {};
  const modules = [palette, foundations, semantic, component];

  modules.forEach((module) => {
    Object.entries(module).forEach(([group, value]) => {
      if (!value || typeof value !== "object") return;
      const groupName =
        GROUP_NAMES[group] ??
        `${group.charAt(0).toUpperCase()}${group.slice(1)}`;

      cssProps[groupName] ??= {};

      Object.entries(value).forEach(([name]) => {
        const cssVarValue = defaultTheme.getVarValue(name);

        cssProps[groupName][name] = {
          value: cssVarValue,
          control: guessControlType(name, cssVarValue),
          category: groupName,
        };
      });
    });
  });

  return cssProps;
}

function guessControlType(name: string, value: string) {
  if (name.includes("color") || name.includes("clr")) {
    return "color";
  }
  return "text";
}

main();
