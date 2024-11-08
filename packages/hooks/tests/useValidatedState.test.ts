import { expect, test, describe } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useValidatedState } from '../src';

const isEven = (next: number) => {
  if (next % 2 !== 0) {
    return 'Number must be even';
  }
};

describe('useValidatedState', () => {
  test('validation passes', () => {
    const { result } = renderHook(() => useValidatedState<number>(2, isEven));

    const setState = result.current[2];
    act(() => setState(10));

    expect(result.current[0]).toBe(10);
    expect(result.current[1]).toBe(null);
  });

  test('validation fails', () => {
    const { result } = renderHook(() => useValidatedState<number>(2, isEven));

    const setState = result.current[2];
    act(() => setState(5));

    expect(result.current[0]).toBe(2);
    expect(result.current[1]).toBe('Number must be even');
  });

  test('validation passes with function', () => {
    const { result } = renderHook(() => useValidatedState<number>(2, isEven));

    const setState = result.current[2];
    act(() => setState((count) => count + 10));

    expect(result.current[0]).toBe(12);
    expect(result.current[1]).toBe(null);
  });
});
