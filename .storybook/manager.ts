import { addons } from "@storybook/manager-api";
import atomicTheme from "./atomicTheme";

addons.setConfig({
  theme: atomicTheme,
});
