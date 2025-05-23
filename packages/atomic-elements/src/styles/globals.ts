import { createGlobalStyle } from "styled-components";

export const CssGlobalDefaults = createGlobalStyle`
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
