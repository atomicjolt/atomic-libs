import { useRef } from 'react';
import { useRender } from './useRender';

/** Returns the number of times the component has been rendered
 * @example
 * function MyComponent() {
 *   const renderCount = useRenderCount();
 *   return <div>Rendered {renderCount} times</div>;
 * }
 */
export function useRenderCount() {
  const countRef = useRef(0);
  useRender(() => { countRef.current++ });
  return countRef.current;
}
