import { RefObject, useRef } from "react";
import { useBool, useClickOutside } from "./util";

export function useDropdown<E extends Element>(): [
  RefObject<E>,
  boolean,
  () => void
] {
  const ref = useRef(null);
  const [open, toggle] = useBool(false);

  useClickOutside(
    ref,
    () => {
      if (open) toggle();
    },
    { enabled: open }
  );

  return [ref, open, toggle];
}
