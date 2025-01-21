import fs from "fs";
import path from "path";
import * as variables from "../packages/atomic-elements/src/styles/variables";
import { defaultTheme } from "../packages/atomic-elements/src/styles/theme";

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
  Object.entries(variables).forEach(([group, value]) => {
    if (group === "variables") return;
    const groupName = `${group.charAt(0).toUpperCase()}${group.slice(1)}`;

    cssProps[groupName] = {};

    Object.entries(value).forEach(([name, value]) => {
      const cssVarValue = defaultTheme.getVarValue(name);

      cssProps[groupName][name] = {
        value: cssVarValue,
        category: groupName,
      };
    });
  });

  return cssProps;
}

main();
