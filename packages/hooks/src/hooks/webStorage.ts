import { Dispatch, useState } from "react";

interface OptionalParams<InputFormat, OutputFormat> {
  prepare: (value: InputFormat) => OutputFormat;
  parse: (value: OutputFormat) => InputFormat;
  prefix?: string;
}

interface StorageInterface<Key, Value> {
  getItem(key: Key): Value;
  setItem(key: Key, value: Value): void;
  removeItem(key: Key): void;
}

const DEFAULTS: OptionalParams<any, any> = {
  prepare: JSON.stringify,
  parse: JSON.parse,
};

/** Factory function for `useLocalStroage` and `useSessionStorage` */
export function makeStorageHook<Stored = string>(
  storage: StorageInterface<string, Stored>,
  options: Partial<OptionalParams<any, Stored>> = {}
) {
  return <T>(
    key: string,
    initialState: T
  ): [state: T, setState: Dispatch<T>, remove: () => void] => {
    const {
      prepare,
      parse,
      prefix = "",
    }: OptionalParams<T, Stored> = {
      ...DEFAULTS,
      ...options,
    } as OptionalParams<T, Stored>;

    const keyWithPrefix = `${prefix}${key}`;

    const [state, setState] = useState<T>(() => {
      const cached = storage.getItem(keyWithPrefix);
      if (cached) {
        return parse(cached);
      }
      return initialState;
    });

    const setStateWrapper = (value: T) => {
      setState(value);
      storage.setItem(keyWithPrefix, prepare(value));
    };

    const remove = () => storage.removeItem(keyWithPrefix);

    return [state, setStateWrapper, remove];
  };
}

/** Control a `localStorage` value as a React state value. Setting the value will also write it to `localStorage`.
 * Upon a reload, if the `key` exisits in `localStorage`, the value will be loaded and used as the initial state, instead of
 * `initialState`.
 * @param key - a unique key to set and access the value with
 * @param initialState - initial state value
 * @returns an array of:
 * - The state value
 * - the state setter function (which will also set the value in `localStorage`)
 * - a function to remove the value from `localStorage`. This does not change the value held in state
 */
export const useLocalStorage = makeStorageHook(localStorage);

/** Control a `sessionStorage` value as a React state value. Setting the value will also write it to `sessionStorage`
 * upon a reload, if the `key` exisits in `sessionStorage`, the value will be loaded and used as the initial State, instead of
 * `initialState`.
 * @param key - a unique key to set and access the value with
 * @param initialState - initial state value
 * @returns an array of:
 * - The state value
 * - the state setter function (which will also set the value in `sessionStorage`)
 * - a function to remove the value from `sessionStorage`. This does not change the value held in state
 */
export const useSessionStorage = makeStorageHook(sessionStorage);
