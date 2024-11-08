import { Dispatch, useState } from 'react';

interface OptionalParams<T, S> {
  prepare: (value: T) => S;
  parse: (value: S) => T;
}

interface StorageInterface<K, S> {
  getItem(key: K): S;
  setItem(key: K, value: S): void;
  removeItem(key: K): void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DEFAULTS: OptionalParams<any, string> = {
  prepare: JSON.stringify,
  parse: JSON.parse,
};

/** Factory function for `useLocalStroage` and `useSessionStorage` */
export function makeStorageHook<Key = string, Stored = string>(storage: StorageInterface<Key, Stored>) {
  return <T>(
    initialState: T,
    key: Key,
    options: Partial<OptionalParams<T, Stored>> = {},
  ): [state: T, setState: Dispatch<T>, remove: () => void] => {
    const { prepare, parse }: OptionalParams<T, Stored> = { ...DEFAULTS, ...options } as OptionalParams<T, Stored>;

    const [state, setState] = useState<T>(() => {
      const cached = storage.getItem(key);
      if (cached) {
        return parse(cached);
      }
      return initialState;
    });

    const setStateWrapper = (value: T) => {
      setState(value);
      storage.setItem(key, prepare(value));
    };

    const remove = () => storage.removeItem(key);

    return [state, setStateWrapper, remove];
  };
}

/** Control a `localStorage` value as a React state value. Setting the value will also write it to `localStorage`.
 * Upon a reload, if the `key` exisits in `localStorage`, the value will be loaded and used as the initial state, instead of
 * `initialState`.
 * @param initialState - initial state value
 * @param key - a unique key to set and access the value with
 * @param options - optional arguments
 *  - `prepare`: How to encode the data as a string to store. By default, it uses JSON.stringify
 *  - `parse`: How to decode a value retreived from storage. By default, it uses JSON.parse
 * @returns an array of:
 * - The state value
 * - the state setter function (which will also set the value in `localStorage`)
 * - a function to remove the value from `localStorage`. This does not change the value held in state
 */
export const useLocalStorage = makeStorageHook(localStorage);

/** Control a `sessionStorage` value as a React state value. Setting the value will also write it to `sessionStorage`
 * upon a reload, if the `key` exisits in `sessionStorage`, the value will be loaded and used as the initial State, instead of
 * `initialState`.
 * @param initialState - initial state value
 * @param key - a unique key to set and access the value with
 * @param options - optional arguments
 *  - `prepare`: How to encode the data as a string to store. By default, it uses JSON.stringify
 *  - `parse`: How to decode a value retreived from storage. By default, it uses JSON.parse
 * @returns an array of:
 * - The state value
 * - the state setter function (which will also set the value in `sessionStorage`)
 * - a function to remove the value from `sessionStorage`. This does not change the value held in state
 */
export const useSessionStorage = makeStorageHook(sessionStorage);
