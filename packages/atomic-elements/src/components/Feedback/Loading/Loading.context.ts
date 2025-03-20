import { createComponentContext } from "@utils/index";
import { LoadingProps } from ".";
import { createContext, useContext } from "react";

export const LoadingContext = createComponentContext<LoadingProps>();

export interface LoadingState {
  isLoading: boolean;
  buttonBehavior: "disabled" | "loading" | "enabled";
}

export const LoadingStateContext = createContext<LoadingState>({
  isLoading: false,
  buttonBehavior: "disabled",
});

export function useLoading(defaultValue?: boolean): LoadingState {
  const ctx = useContext(LoadingStateContext);

  return {
    ...ctx,
    isLoading: defaultValue !== undefined ? defaultValue : ctx.isLoading,
  };
}
