import { Meta, StoryObj } from "@storybook/react-vite";
import { TimeInput } from ".";
import { now, getLocalTimeZone, Time } from "@internationalized/date";
import { LoadingArgTypes, TextInputControls } from "@sb/helpers";

// Snippets print @internationalized/date values with toString(), which isn't
// valid JSX. Print them as the matching parse call instead.
const transformDateSource = (code: string) =>
  code
    .replace(
      /=\{(\d{4}-\d{2}-\d{2}T[^}[]+\[[^\]]+\])\}/g,
      '={parseZonedDateTime("$1")}'
    )
    .replace(/=\{(\d{4}-\d{2}-\d{2}T[\d:.]+)\}/g, '={parseDateTime("$1")}')
    .replace(/=\{(\d{4}-\d{2}-\d{2})\}/g, '={parseDate("$1")}')
    .replace(/=\{(\d{2}:\d{2}:\d{2}(?:\.\d+)?)\}/g, '={parseTime("$1")}');

const date = now(getLocalTimeZone());

// Preset values for the time props' select controls.
const timePresets = {
  "9:00 AM": new Time(9),
  "12:00 PM": new Time(12),
  "5:00 PM": new Time(17),
  Now: date,
};

const timeControl = {
  control: "select",
  options: Object.keys(timePresets),
  mapping: timePresets,
} as const;

export default {
  title: "Inputs/Date & Time/TimeInput",
  component: TimeInput,
  parameters: {
    docs: {
      source: {
        transform: transformDateSource,
      },
    },
  },
  argTypes: {
    ...LoadingArgTypes,
    ...TextInputControls,
    placeholder: {
      table: { disable: true },
    },
    defaultValue: {
      ...timeControl,
      description:
        "The initial value of an uncontrolled time input. Accepts a value from `@internationalized/date` library",
    },
    onChange: {
      action: "onChange",
      description: "Called when the value changes",
      table: {
        category: "Events",
      },
    },
    value: {
      ...timeControl,
      description:
        "The value of the time input. Accepts a `Time` from `@internationalized/date` library",
    },
    size: {
      table: {
        defaultValue: { summary: '"medium"' },
      },
    },
    granularity: {
      control: "select",
      options: ["hour", "minute", "second"],
      description: "The granularity of the time input",
      table: {
        defaultValue: { summary: '"minute"' },
      },
    },
    hideTimeZone: {
      description: "Hides the timezone",
    },
    shouldForceLeadingZeros: {
      control: "boolean",
      description:
        "Forces leading zeros on the time input. If this is not set it is determined by the user's locale",
    },
    maxValue: {
      ...timeControl,
      description:
        "The maximum value of the time input. Accepts a value from `@internationalized/date` library",
    },
    minValue: {
      ...timeControl,
      description:
        "The minimum value of the time input. Accepts a value from `@internationalized/date` library",
    },
    hourCycle: {
      control: "select",
      options: [12, 24],
      description: "Use a 12 or 24 hour cycle",
      table: {
        defaultValue: { summary: "the hour cycle of the user's locale" },
      },
    },
  },
} as Meta<typeof TimeInput>;

type Story = StoryObj<typeof TimeInput>;

export const Primary: Story = {
  args: {
    defaultValue: date,
    label: "Time input",
    hideTimeZone: true,
  },
};

export const SecondGranularity: Story = {
  args: {
    ...Primary.args,
    granularity: "second",
  },
};

export const HourCycle24: Story = {
  args: {
    ...Primary.args,
    label: "24-Hour Format",
    hourCycle: 24,
  },
};

export const WithError: Story = {
  args: {
    ...Primary.args,
    label: "Start Time",
    isInvalid: true,
    error: "Please enter a valid time",
  },
};
