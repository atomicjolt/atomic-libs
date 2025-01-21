export type Spacing = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export const SpacingSteps: Spacing[] = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

export function getSpacing(val?: string | null) {
  if (!val) return undefined;

  if (SpacingSteps.includes(val as Spacing)) {
    return `var(--space-${val})`;
  }

  return val;
}
