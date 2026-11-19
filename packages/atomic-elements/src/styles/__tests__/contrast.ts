type RGB = [number, number, number];

function hslToRgb(h: number, s: number, l: number): RGB {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [f(0), f(8), f(4)];
}

function parseColor(color: string): RGB {
  const value = color.trim();

  const hex = value.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hex) {
    const digits =
      hex[1].length === 3
        ? hex[1].split("").map((c) => c + c).join("")
        : hex[1];
    return [0, 2, 4].map((i) => parseInt(digits.slice(i, i + 2), 16) / 255) as RGB;
  }

  const hsl = value.match(
    /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*(?:,\s*([\d.]+)\s*)?\)$/
  );
  if (hsl) {
    if (hsl[4] !== undefined && Number(hsl[4]) < 1) {
      throw new Error(`Can't measure contrast of translucent color "${color}"`);
    }
    return hslToRgb(Number(hsl[1]), Number(hsl[2]), Number(hsl[3]));
  }

  throw new Error(`Unsupported color format "${color}"`);
}

function luminance([r, g, b]: RGB): number {
  const channel = (c: number) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

/** WCAG 2 contrast ratio between two opaque colors (1–21). */
export function contrastRatio(a: string, b: string): number {
  const la = luminance(parseColor(a));
  const lb = luminance(parseColor(b));
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

const STATUSES = ["error", "warning", "success", "info"] as const;

/** Foreground/background token pairs components actually render. */
export const CONTRAST_PAIRS: { fg: string; bg: string; min: 4.5 | 3 }[] = [
  { fg: "text-clr", bg: "background-clr", min: 4.5 },
  { fg: "text-clr", bg: "background-clr-raised", min: 4.5 },
  { fg: "text-clr", bg: "background-clr-subtle", min: 4.5 },
  { fg: "text-clr-secondary", bg: "background-clr", min: 4.5 },
  { fg: "text-clr-secondary", bg: "background-clr-subtle", min: 4.5 },
  { fg: "text-clr-on-accent", bg: "accent-clr-fill", min: 4.5 },
  { fg: "text-clr-on-accent", bg: "accent-clr-fill-hover", min: 4.5 },
  { fg: "text-clr-on-accent", bg: "error-clr-fill", min: 4.5 },
  { fg: "text-clr-on-accent", bg: "error-clr-fill-hover", min: 4.5 },
  { fg: "text-clr-on-accent", bg: "success-clr-fill", min: 4.5 },
  { fg: "text-clr-on-accent", bg: "success-clr-fill-hover", min: 4.5 },
  { fg: "accent-clr", bg: "background-clr", min: 4.5 },
  { fg: "accent-clr-hover", bg: "background-clr", min: 4.5 },
  { fg: "error-clr", bg: "background-clr", min: 4.5 },
  ...STATUSES.flatMap((s) => [
    { fg: `${s}-clr-subtle-text`, bg: `${s}-clr-subtle`, min: 4.5 as const },
    { fg: "text-clr", bg: `${s}-clr-subtle`, min: 4.5 as const },
  ]),
  { fg: "text-clr-inverted", bg: "background-clr-inverted", min: 4.5 },
  { fg: "icon-clr-secondary", bg: "background-clr", min: 3 },
  { fg: "border-clr-strong", bg: "background-clr", min: 3 },
  { fg: "border-clr-focus", bg: "background-clr", min: 3 },
];
