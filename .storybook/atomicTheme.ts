import { create } from "storybook/theming";

const brand = {
  brandTitle: "Atomic Elements",
  brandUrl: "https://atomicjolt.com",
  brandTarget: "_self",
};

/** Storybook UI theme when the OS is in light mode. */
export const atomicLightTheme = create({
  base: "light",
  ...brand,
  brandImage: "img/name.svg",
});

/** Storybook UI theme when the OS is in dark mode. */
export const atomicDarkTheme = create({
  base: "dark",
  ...brand,
  // The default logo is dark text, so use the light version.
  brandImage: "img/name-dark.svg",
});

export default atomicLightTheme;
