import { useMemo } from "react";

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
