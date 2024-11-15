import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";

// This is a very lazy approach, and probably shouldn't actually be used in any apps
// But it's fine for getting set up quickly

type SupportedFont =
  | "lato"
  | "material-icons"
  | "material-icons-outlined"
  | "material-icons-round"
  | "material-icons-sharp"
  | "material-icons-two-tone"
  | "material-symbols-outlined"
  | "material-symbols-rounded"
  | "material-symbols-sharp";

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
  "material-symbols-outlined":
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
  "material-symbols-rounded":
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
  "material-symbols-sharp":
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
};

const FontCSS = createGlobalStyle`
/* Hide the icon fonts until they fully load */
.material-icons {
  display: none;
  font-size: 0px;
}

.material-icons-outlined {
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

  useEffect(() => {
    fonts.forEach((font) => {
      const link = document.createElement("link");
      link.href = fontUrls[font];
      link.rel = "stylesheet";
      document.head.appendChild(link);
    });
  }, []);

  return <FontCSS />;
}
