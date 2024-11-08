import { createContext, useContext, Provider } from 'react';

/** Creates a React context and and an associated context hook
 * @param defaultValue The default value for the context
 * @example
 * const [MyContextProvider, useMyContext] = makeContext('default value');
 * @returns A tuple containing the context provider and the context hook
 */
export function makeContext<T>(defaultValue: T): [Provider<T>, () => T] {
  const Context = createContext(defaultValue);
  const useCreatedContext = () => useContext(Context);

  return [Context.Provider, useCreatedContext];
}
