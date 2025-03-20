import { LoadingState, LoadingStateContext } from "./Loading.context";

interface LoadingProviderProps extends Partial<LoadingState> {
  children: React.ReactNode;
}

export function LoadingProvider(props: LoadingProviderProps) {
  const { isLoading = false, buttonBehavior = "disabled", children } = props;

  return (
    <LoadingStateContext.Provider value={{ isLoading, buttonBehavior }}>
      {children}
    </LoadingStateContext.Provider>
  );
}
