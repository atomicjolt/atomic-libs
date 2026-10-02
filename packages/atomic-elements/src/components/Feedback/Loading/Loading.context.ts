import { createContext, useContext } from "react";
import { LoadingProps } from "../../../types";

export const LoadingContext = createContext<LoadingProps | undefined>(
  undefined
);

/** Reads the ambient loading state provided by the nearest `Loading`
 * ancestor and merges it with the given local loading props.
 * Local props take priority over the ambient state. */
export function useLoading(props: LoadingProps = {}): LoadingProps {
  const context = useContext(LoadingContext);

  return {
    isLoading: props.isLoading ?? context?.isLoading,
    loadingLabel: props.loadingLabel ?? context?.loadingLabel,
  };
}
