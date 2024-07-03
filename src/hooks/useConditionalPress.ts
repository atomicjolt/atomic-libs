import { PressProps, usePress } from "@react-aria/interactions";

/** Wraps usePress, but includes a 'button' role if any of the press props are passed.
 * The intention is to make it eaiser to conditionally supply styles to
 * optionally button like elements.
 */
export function useConditionalPress(props: PressProps) {
  const potentialKeys: Partial<keyof PressProps>[] = [
    "isPressed",
    "preventFocusOnPress",
    "shouldCancelOnPointerExit",
    "allowTextSelectionOnPress",
    "onPress",
    "onPressStart",
    "onPressEnd",
    "onPressChange",
    "onPressUp",
  ];

  const role = potentialKeys.some((k) => k in props) ? "button" : undefined;

  const { pressProps, isPressed } = usePress(props);

  return { pressProps: { ...pressProps, role }, isPressed };
}
