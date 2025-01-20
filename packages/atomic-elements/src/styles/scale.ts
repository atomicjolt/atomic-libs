export type NumericScaleValue =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

export const ScaleSteps: NumericScaleValue[] = [
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

export function inScale(value: string): value is NumericScaleValue {
  return ScaleSteps.includes(value as NumericScaleValue);
}
