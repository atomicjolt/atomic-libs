import { useContext } from "react";
import { mergeProps, mergeRefs, useObjectRef } from "@react-aria/utils";

type Props = Record<string, any>;
type PropsArg = Props | null | undefined;
type WithRef<T, R> = T & { ref?: React.Ref<R> };

export function useContextProps<T extends PropsArg>(
  context: React.Context<T>,
  props: T
) {
  const contextProps = useContext(context);

  return mergeProps(contextProps, props);
}

export function useContextPropsV2<T extends PropsArg, R>(
  context: React.Context<WithRef<Partial<T>, R>>,
  props: T,
  ref: React.Ref<R>
): [T, React.RefObject<R>] {
  const { ref: contextRef, ...contextProps } = useContext(context);

  const mergedRef = useObjectRef(mergeRefs(ref, contextRef!));

  const mergedProps = mergeProps(contextProps, props) as T;

  return [mergedProps, mergedRef];
}
