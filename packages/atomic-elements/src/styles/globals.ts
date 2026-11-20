import { createGlobalStyle, DefaultTheme } from "styled-components";

/** Page colors for every scheme except the base one, so light pages stay as they are. */
function schemeBodyRules(theme: DefaultTheme) {
  if (!theme?.colorSchemes) return "";
  return Object.keys(theme.colorSchemes)
    .filter((name) => name !== "light")
    .map(
      (name) => `
[data-color-scheme="${name}"] body {
  background-color: var(--background-clr);
  color: var(--text-clr);
}`
    )
    .join("\n");
}

export const CssGlobalDefaults = createGlobalStyle`
${({ theme }) => schemeBodyRules(theme)}

html {
  font-size: 10px;
}

html,
html a {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  text-rendering: optimizeLegibility;
  font-family: var(--font-family)
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus:not(:focus-visible) {
  outline: none;
}
`;
