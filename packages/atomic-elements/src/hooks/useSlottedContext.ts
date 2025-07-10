import { useContext } from 'react';

export type SlottedContextValue<T> = T | {
  slots?: Record<string | symbol, T>
} | null | undefined;

export interface SlotProps {
  slot?: string | null;
}

export const DEFAULT_SLOT = Symbol("DEFAULT_SLOT");

// from: https://github.com/adobe/react-spectrum/blob/c6bd2cb0808838a9f1f850b6c1ffe88465254222/packages/react-aria-components/src/utils.tsx#L157
/** Consume a context OR consume a slotted context value */
export function useSlottedContext<T>(
  context: React.Context<SlottedContextValue<T>>,
  slot?: string | null
): T | null | undefined {
  const ctx = useContext(context);
  if (slot === null) {
    // An explicit `null` slot means don't use context.
    return null;
  }

  // If slots are provided by the context we need to consume the correct slot
  if (ctx && typeof ctx === "object" && "slots" in ctx && ctx.slots) {
    const allSlots = Object.keys(ctx.slots);

    if (!slot && !ctx.slots[DEFAULT_SLOT]) {
      throw new Error(`A slot prop is required. Valid slot names are ${allSlots.join(", ")}`);
    }

    const key = slot || DEFAULT_SLOT;

    if (!ctx.slots[key]) {
      throw new Error(`Invalid slot name. Valid slot names are ${allSlots.join(", ")}`);
    }

    return ctx.slots[key];
  }

  // The context doesn't provide a slot, consume the context as is
  return ctx as T;
}
