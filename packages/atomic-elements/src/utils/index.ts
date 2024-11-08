import React from "react";

export function createComponentContext<T extends object>(
  defaultValue: Partial<T> = {}
) {
  return React.createContext<Partial<T & { ref?: React.Ref<any> }>>(
    defaultValue
  );
}
