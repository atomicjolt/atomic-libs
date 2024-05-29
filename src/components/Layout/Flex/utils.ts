export function resolveNumber(val?: string | number) {
  if (typeof val === "number") return `${val}px`;
  return val;
}
