import { useEffect, useState } from 'react';

export function useDebouncedState<T>(value: T, delay: number): ReturnType<typeof useState<T>> {
  const [state, setState] = useState<T | undefined>(value);

  useEffect(() => {
    const handler = setTimeout(() => setState(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return [state, setState];
}
