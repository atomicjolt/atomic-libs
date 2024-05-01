import { useContext } from "react";
import { mergeProps } from "react-aria";

type Props = Record<string, any>;
type PropsArg = Props | null | undefined;

export function useContextProps<T extends PropsArg>(
  context: React.Context<T>,
  props: T
) {
  const contextProps = useContext(context);

  return mergeProps(contextProps, props);
}
