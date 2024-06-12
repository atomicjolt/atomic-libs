type DurationUnit =
  | "year"
  | "month"
  | "week"
  | "day"
  | "hour"
  | "minute"
  | "second";

type DurationStyle = "long" | "short" | "narrow";

const units: DurationUnit[] = [
  "second",
  "minute",
  "hour",
  "day",
  "week",
  "month",
  "year",
];

const unitStyles: Record<DurationStyle, Record<DurationUnit, string>> = {
  long: {
    year: "year",
    month: "month",
    week: "week",
    day: "day",
    hour: "hour",
    minute: "minute",
    second: "second",
  },
  short: {
    year: "yr",
    month: "mo",
    week: "wk",
    day: "day",
    hour: "hr",
    minute: "min",
    second: "sec",
  },
  narrow: {
    year: "y",
    month: "mo",
    week: "w",
    day: "d",
    hour: "h",
    minute: "m",
    second: "s",
  },
};

const unitToSeconds: Record<DurationUnit, number> = {
  year: 31536000,
  month: 2592000,
  week: 604800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

export interface FormatDurationOptions {
  /** The smallest unit to display
   *  If the duration is smaller than this unit, it will output "0 \<unit\>"
   * @default "second"
   */
  minUnit?: DurationUnit;

  /** The largest unit to display
   * @default "year"
   */
  maxUnit?: DurationUnit;

  /** The style of the duration
   * - long: "1 year 2 months 3 weeks 4 days 5 hours 6 minutes 7 seconds"
   * - short: "1 yr 2 mo 3 wk 4 days 5 hr 6 min 7 sec"
   * - narrow: "1y 2mo 3w 4d 5h 6m 7s"
   */
  style?: DurationStyle;
}

export function formatDuration(
  seconds: number,
  options: FormatDurationOptions = {}
) {
  const { minUnit = "second", maxUnit = "year", style = "long" } = options;

  let remaining = seconds;
  let string = "";
  let i = units.indexOf(maxUnit);
  while (i >= 0) {
    const unit = units[i];
    const unitSeconds = unitToSeconds[unit];
    if (unitSeconds <= remaining) {
      const count = Math.floor(remaining / unitSeconds);
      remaining %= unitSeconds;

      let unitString = unitStyles[style][unit];
      if (count !== 1 && style === "long") unitString += "s";

      string += count.toLocaleString();
      if (style === "long") string += " ";
      string += `${unitString} `;
    }
    i--;

    if (unit === minUnit) break;
  }

  string = string.trim();

  if (string === "") {
    string = "0";
    let unitString = unitStyles[style][minUnit];
    if (style === "long") unitString += "s";
    string += ` ${unitString}`;
  }

  return string;
}

export function useDurationFormatter(options?: FormatDurationOptions) {
  return (value: number) => formatDuration(value, options);
}
