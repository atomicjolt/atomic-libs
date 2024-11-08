import { expect, test, describe } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDefaultState } from '../src';

describe('useDefaultState', () => {
  test('should work like setState', () => {
    const { result } = renderHook(() => useDefaultState(1));

    expect(result.current[0]).toEqual(1);

    const setState = result.current[1];
    act(() => setState(2));
    expect(result.current[0]).toEqual(2);
  });

  test('should be revertable', () => {
    const { result } = renderHook(() => useDefaultState(1));

    expect(result.current[0]).toEqual(1);

    const setState = result.current[1];
    act(() => setState(2));
    expect(result.current[0]).toEqual(2);

    const revert = result.current[2];
    act(() => revert());
    expect(result.current[0]).toEqual(1);
  });
});
