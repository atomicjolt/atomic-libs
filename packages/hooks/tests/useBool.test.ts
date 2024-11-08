import { expect, test, describe } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useBool } from '../src';

describe('useBool', () => {
  test('uses false as a default', () => {
    const { result } = renderHook(() => useBool());

    expect(result.current[0]).toBe(false);
  });

  test('accepts an alternative default', () => {
    const { result } = renderHook(() => useBool(true));
    expect(result.current[0]).toBe(true);
  });

  test('toggling boolean', () => {
    const { result } = renderHook(() => useBool());

    const toggle = result.current[1];

    act(() => toggle());
    expect(result.current[0]).toBe(true);

    act(() => toggle());
    expect(result.current[0]).toBe(false);
  });

  test('setting directly', () => {
    const { result } = renderHook(() => useBool());

    const set = result.current[2];
    act(() => set(true));

    expect(result.current[0]).toBe(true);

    act(() => set(false));
    expect(result.current[0]).toBe(false);
  });
});
