import React from "react";
import { createGlobalStyle } from "styled-components";
import { HeadProvider, Link } from "react-head";

type SupportedFont =
  | "lato"
  | "material-icons"
  | "material-icons-outlined"
  | "material-icons-round"
  | "material-icons-sharp"
  | "material-icons-two-tone";

interface LoadFontsProps {
  /** The fonts to load */
  fonts?: SupportedFont[];
}

const fontUrls: Record<SupportedFont, string> = {
  lato: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
  "material-icons": "https://fonts.googleapis.com/icon?family=Material+Icons",
  "material-icons-outlined":
    "https://fonts.googleapis.com/icon?family=Material+Icons%7CMaterial+Icons+Outlined",
  "material-icons-round":
    "https://fonts.googleapis.com/icon?family=Material+Icons%7CMaterial+Icons+Round",
  "material-icons-sharp":
    "https://fonts.googleapis.com/icon?family=Material+Icons%7CMaterial+Icons+Sharp",
  "material-icons-two-tone":
    "https://fonts.googleapis.com/icon?family=Material+Icons%7CMaterial+Icons+Two+Tone",
};

const FontCSS = createGlobalStyle`

:root {
  --font-family: "Lato", sans-serif;
  --font-weight-light: 200;
  --font-weight-regular: 400;
  --font-weight-bold: 700;
}

/* Hide the icon fonts until they fully load */

.material-icons {
  display: none;
  font-size: 0px;
}

.material-icons-round {
  display: none;
  font-size: 0px;
}

.material-icons-sharp {
  display: none;
  font-size: 0px;
}

.material-icons-two-tone {
  display: none;
  font-size: 0px;
}
`;

/** Load the fonts used by atomic-elements by default */
export function LoadFonts(props: LoadFontsProps) {
  const { fonts = ["lato", "material-icons"] } = props;

  return (
    <HeadProvider>
      <FontCSS />
      {fonts.map((font) => (
        <Link href={fontUrls[font]} key={font} rel="stylesheet" />
      ))}
    </HeadProvider>
  );
}
