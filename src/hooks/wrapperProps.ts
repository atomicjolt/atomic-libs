import { InputComponentProps, InputElementProps, InputProps } from "../types";

export function useWrapperComponent<
  ElementProps extends Record<string, any>,
  WrappedProps extends Record<string, any>
>(
  properties: Partial<ElementProps & WrappedProps>,
  names: (keyof WrappedProps)[]
): [ElementProps, WrappedProps] {
  const entries = Object.entries(properties);

  const elementProperties = Object.fromEntries(
    entries.filter(([k, v]) => !names.includes(k))
  ) as ElementProps;

  const wrappedProperties = Object.fromEntries(
    entries.filter(([k, v]) => names.includes(k))
  ) as WrappedProps;

  return [elementProperties, wrappedProperties];
}

// export function useInput<T, Props extends InputProps<T>>(
//   properties: Props,
//   keys: (keyof Props)[] = []
// ) {
//   return useWrapperComponent<InputElementProps, InputComponentProps>(
//     properties,
//     [
//       ...keys,
//       "label",
//       "size",
//       "hideLabel",
//       "error",
//       "message",
//       // "value",
//       // "onChange",
//     ]
//   );
// }
