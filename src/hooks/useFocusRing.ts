import {
  AriaFocusRingProps,
  useFocusRing as ariaUseFocusRing,
} from "react-aria";

export function useFocusRing(props?: AriaFocusRingProps) {
  const { focusProps, isFocusVisible, isFocused } = ariaUseFocusRing(props);

  return {
    focusProps: {
      ...focusProps,
      "data-focus-visible": isFocusVisible || undefined,
    },
    isFocusVisible,
    isFocused,
  };
}
