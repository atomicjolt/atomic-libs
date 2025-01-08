import { renderHook, act } from '@testing-library/react';
import { useDebouncedState } from '../src';
import { describe, it, expect, vi } from 'vitest';

describe('useDebouncedState', () => {
  vi.useFakeTimers();

  it('should initialize with the given value', () => {
    const { result } = renderHook(() => useDebouncedState('initial', 500));
    expect(result.current[0]).toBe('initial');
  });

  it('should update the state after the delay', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebouncedState(value, delay), {
      initialProps: { value: 'initial', delay: 500 },
    });

    rerender({ value: 'updated', delay: 500 });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current[0]).toBe('updated');
  });

  it('should not update the state before the delay', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebouncedState(value, delay), {
      initialProps: { value: 'initial', delay: 500 },
    });

    rerender({ value: 'updated', delay: 500 });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current[0]).toBe('initial');
  });

  it('should reset the timer if value changes before delay', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebouncedState(value, delay), {
      initialProps: { value: 'initial', delay: 500 },
    });

    rerender({ value: 'updated1', delay: 500 });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    rerender({ value: 'updated2', delay: 500 });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current[0]).toBe('initial');

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current[0]).toBe('updated2');
  });
});
