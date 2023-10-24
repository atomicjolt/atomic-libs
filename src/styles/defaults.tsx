import React from "react";
import { LoadFonts } from "./fonts";
import { CssGlobalDefaults } from "./globals";
import { CssVariables } from "./variables";

export function SensibleDefaults() {
  return (
    <>
      <LoadFonts />
      <CssVariables />
      <CssGlobalDefaults />
    </>
  );
}
