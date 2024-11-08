import { useCallback, useState } from 'react';
import { InitialState } from '../types';

type UseBooleanReturn = [value: boolean, toggle: () => void, set: (newState: boolean) => void];

/** Simple `useState` wrapper for boolean values
 * @param intialState - The boolean value to start with. Defaults to false
 * @example
 * const [bool, toggle, setBool] = useBool();
 * // bool === false
 * // toggle() => bool === true
 * // setBool(false) => bool === false
 * // setBool(true) => bool === true
 * @returns {UseBooleanReturn} an array of:
 *  - the current value
 *  - a function to toggle the boolean value
 *  - a function to set the boolean value
 */
export function useBool(intialState: InitialState<boolean> = false): UseBooleanReturn {
  const [bool, setBool] = useState(intialState);

  const toggle = useCallback(() => setBool((val) => !val), []);

  return [bool, toggle, setBool];
}
