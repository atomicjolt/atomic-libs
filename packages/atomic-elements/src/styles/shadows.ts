import { SuggestStrings } from '../types';

type Shadow = "1" | "2" | "3" | "4" | "5" | "6";

const ShadowSteps: Shadow[] = ["1", "2", "3", "4", "5", "6"];

export interface ShadowProps {
  $shadow?: SuggestStrings<Shadow>;
}

export function shadow(props: ShadowProps) {
  const { $shadow } = props;

  if (!$shadow) return;

  if (ShadowSteps.includes($shadow as Shadow)) {
    return {
      boxShadow: `var(--shadow-${$shadow})`,
    }
  }

  return {
    boxShadow: $shadow,
  }
}
