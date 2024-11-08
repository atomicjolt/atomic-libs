import { EffectCallback, useEffect } from 'react';

/** Run `callback` after the initial render of the component
 * @param callback The function to run after the initial render
 * @example
 * function MyComponent() {
 *    useMount(() => {
 *     console.log('Mounted!');
 *    });
 *   return <div>My Component</div>;
 * }
 */
export function useMount(callback: EffectCallback) {
  useEffect(callback, []);
}
