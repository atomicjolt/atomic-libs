import { useMemo } from "react";

export function useVariantClass<V extends string>(
  className: string,
  variant: V,
  sep: string = "--"
) {
  return useMemo(() => {
    return `${className}${sep}${variant}`;
  }, [variant]);
}
