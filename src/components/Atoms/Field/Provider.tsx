import React from "react";

interface ProviderProps {
  values: Array<[React.Provider<any>, any]>;
  children: React.ReactNode;
}

export function Provider(props: ProviderProps): JSX.Element | null {
  const { values, children } = props;

  const rendered = values.reduce((acc, [Provider, value]) => {
    return <Provider value={value}>{acc}</Provider>;
  }, children);

  // @ts-ignore
  return rendered;
}
