import { DirectionProps } from "../types";

export function resolveNumber(val?: string | number) {
  if (typeof val === "number") return `${val}px`;
  return val;
}

interface RtlProps {
  /** Return value for left-to-right */
  ltr: string;
  /** Return value for right-to-left */
  rtl: string;
}

export function direction({ ltr, rtl }: RtlProps) {
  return ({ $rtl }: DirectionProps) => {
    return $rtl ? rtl : ltr;
  };
}
