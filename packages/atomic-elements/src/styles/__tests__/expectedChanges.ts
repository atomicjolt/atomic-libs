/**
 * Tokens whose resolved value intentionally differs from the baseline in
 * `__fixtures__/resolved-tokens.baseline.json`. Every entry here must also be
 * listed in docs/superpowers/plans/2026-11-19-semantic-tokens-visual-changes.md.
 */
export const EXPECTED_CHANGES: Record<string, string> = {
  // Task 5: component token defaults
  "time-selected-back-clr": "hsl(191, 82%, 31%)", // accent-clr (primary700)
  "time-selected-text-clr": "hsl(0, 0%, 100%)", // text-clr-on-accent (neutral50)
  "calendar-selected-text-clr": "hsl(0, 0%, 100%)", // text-clr-on-accent (neutral50)
};
