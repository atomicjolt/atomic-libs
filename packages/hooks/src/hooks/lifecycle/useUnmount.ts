import { useEffect } from 'react';

/** Run `callback` when the component is being unmounted
 * @param callback The function to run after the initial render
 * @example
 * function MyComponent() {
 *   useUnmount(() => {
 *    console.log('Unmounting!');
 *  });
 *  return <div>My Component</div>;
 * }
 */
export function useUnmount(callback: () => void) {
  useEffect(() => callback, []);
}
