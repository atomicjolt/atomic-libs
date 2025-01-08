import { mergeProps, mergeRefs, useObjectRef } from "@react-aria/utils";
import {
  SlotProps,
  SlottedContextValue,
  useSlottedContext,
} from "./useSlottedContext";

type WithRef<T, R> = T & { ref?: React.Ref<R> };
export type ContextValue<T, R> = SlottedContextValue<WithRef<T, R>>;

// from: https://github.com/adobe/react-spectrum/blob/c6bd2cb0808838a9f1f850b6c1ffe88465254222/packages/react-aria-components/src/utils.tsx#L180
/** Consume a value from a context & merge it with the provided props */
export function useContextProps<T extends object, R>(
  context: React.Context<ContextValue<T, R>>,
  props: T,
  ref: React.Ref<R>
): [T, React.RefObject<R>] {
  const ctx = useSlottedContext(context, (props as SlotProps).slot) || {};
  const { ref: contextRef, ...contextProps } = ctx as WithRef<T, R>;

  const mergedRef = useObjectRef(mergeRefs(ref, contextRef!));

  const mergedProps = mergeProps(contextProps, props) as T;

  return [mergedProps, mergedRef];
}
