import React from "react";

interface ProviderProps {
  values: Array<[React.Provider<any>, any]>;
  children: React.ReactNode;
}

export function Provider(props: ProviderProps): React.ReactNode {
  const { values, children } = props;

  const rendered = values.reduce((acc, [Provider, value]) => {
    return <Provider value={value}>{acc}</Provider>;
  }, children);

  return rendered;
}
