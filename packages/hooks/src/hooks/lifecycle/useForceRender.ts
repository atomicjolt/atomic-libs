import { useCallback, useState } from 'react';


/** Forces a component to re-render
 * @example
 * const forceRender = useForceRender();
 * forceRender();
 * @returns A function that forces a component to re-render
 */
export function useForceRender() {
  const [, setState] = useState(0);

  return useCallback(() => setState((prev) => prev + 1), []);
}
