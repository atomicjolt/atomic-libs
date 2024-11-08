import { EffectCallback, useEffect } from 'react';

/** Run `callback` on every render of the component
 * @param callback The function to run after the initial render
 * @example
 * function MyComponent() {
 * useRender(() => {
 *  console.log('Rendered!');
 * });
 * return <div>My Component</div>;
 * }
 */
export function useRender(callback: EffectCallback) {
  useEffect(callback);
}
