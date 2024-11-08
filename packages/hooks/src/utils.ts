import { UpdateStateAction } from './types';

export function resolveValue<T>(prev: T, next: UpdateStateAction<T>): T {
  return typeof next === 'function' ? (next as Function)(prev) : next;
}
