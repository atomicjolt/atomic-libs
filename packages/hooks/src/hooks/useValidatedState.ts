import { useState } from 'react';
import { resolveValue } from '../utils';
import { StateDispatch, UpdateStateAction } from '../types';

type UseValidatedStateReturn<T, E> = [state: T, error: E | null, setState: StateDispatch<T>];

/** A `setState` wrapper that performs some validation on any new state values
 * @param intialState - The initial state value to store
 * @param validator - a validator function to check any new state values against before updating.
 * The validator is expected to return either nothing, or a value of type `E`. If nothing is returned
 * the value is assumed to valid and will be updated. If a value is returned, it will be set as the error value
 * @returns an array of:
 *  - The state value
 *  - The current error value (defaults to null)
 *  - state setter function
 */
export function useValidatedState<T, E = string>(
  intialState: T,
  validator: (newState: T) => void | E,
): UseValidatedStateReturn<T, E> {
  // Should we validate initial state as well?
  const [state, setState] = useState<T>(intialState);
  const [error, setError] = useState<E | null>(null);

  const setStateWrapper = (newState: UpdateStateAction<T>) => {
    const newStateValue = resolveValue(state, newState);
    const result = validator(newStateValue);

    if (result) {
      setError(result);
    } else {
      setState(newState);
    }
  };

  return [state, error, setStateWrapper];
}
