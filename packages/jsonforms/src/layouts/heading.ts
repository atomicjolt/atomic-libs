export const HEADING_LEVELS = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
export type HeadingLevel = (typeof HEADING_LEVELS)[number];

/** `options.headingLevel` if it's h1–h6, otherwise the fallback. */
export function headingLevel(value: unknown, fallback: HeadingLevel = "h2"): HeadingLevel {
  return HEADING_LEVELS.includes(value as HeadingLevel) ? (value as HeadingLevel) : fallback;
}
