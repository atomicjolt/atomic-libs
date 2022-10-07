import { useMemo } from "react";
import { VariantRecord } from "../types";

export function useVariantComponent<V extends string, T>(
  variants: VariantRecord<V, T>,
  variant: V
): React.ComponentType<T> {
  return useMemo(() => {
    if (!variants.hasOwnProperty(variant)) {
      throw new Error(`${variant} is not a valid variant for this Component`);
    }
    return variants[variant];
  }, [variant]);
}

export function useVariantClass<V extends string>(
  className: string,
  variant: V,
  sep: string = "--"
) {
  return useMemo(() => {
    if (variant === "default") {
      return className;
    } else {
      return `${className}${sep}${variant}`;
    }
  }, [variant]);
}

export function useVariant<V extends string, T>(
  variants: VariantRecord<V, T>,
  className: string,
  variant: V
): [React.ComponentType<T>, string] {
  return [
    useVariantComponent(variants, variant),
    useVariantClass(className, variant),
  ];
}
