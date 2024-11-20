import { useMemo } from "react";
import { MaterialSymbolFontSettingsOptions } from "../types";

export function useMaterialSymbolFontVariationSettings(
  props: MaterialSymbolFontSettingsOptions
): string {
  const { fill, weight, grade, opticalSize } = props;

  return useMemo(() => {
    const settings: Record<string, any> = {};

    if (fill) settings["FILL"] = fill;
    if (weight) settings["wght"] = weight;
    if (grade) settings["GRAD"] = grade;
    if (opticalSize) settings["opsz"] = opticalSize;

    return Object.entries(settings)
      .map(([key, value]) => `'${key}' ${value}`)
      .join(", ");
  }, [fill, weight, grade, opticalSize]);
}
