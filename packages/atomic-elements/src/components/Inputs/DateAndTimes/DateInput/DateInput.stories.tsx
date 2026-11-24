import { Meta, StoryObj } from "@storybook/react-vite";
import { now, getLocalTimeZone } from "@internationalized/date";
import { TextInputControls } from "@sb/helpers";
import { DateInput } from ".";

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

// Preset values for the date props' select controls.
const datePresets = {
  Now: date,
  "One week ago": date.subtract({ weeks: 1 }),
  "In one week": date.add({ weeks: 1 }),
  "One month ago": date.subtract({ months: 1 }),
  "In one month": date.add({ months: 1 }),
};

const dateControl = {
  control: "select",
  options: Object.keys(datePresets),
  mapping: datePresets,
} as const;

export default {
  title: "Inputs/Date & Time/DateInput",
  component: DateInput,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: transformDateSource,
      },
    },
  },
  argTypes: {
    ...TextInputControls,
    placeholder: {
      table: { disable: true },
    },
    defaultValue: {
      ...dateControl,
      description:
        "The initial value of an uncontrolled date input. Accepts a value from `@internationalized/date` library",
    },
    onChange: {
      action: "onChange",
      description: "Called when the value changes",
      table: {
        category: "Events",
      },
    },
    value: {
      ...dateControl,
      description:
        "The value of the date input. Accepts a value from `@internationalized/date` library",
    },
    size: {
      table: {
        defaultValue: { summary: '"medium"' },
      },
    },
    granularity: {
      control: "select",
      options: ["day", "hour", "minute", "second"],
      description: "The granularity of the date input",
      table: {
        defaultValue: {
          summary: '"day" for dates, "minute" for dates with times',
        },
      },
    },
    hideTimeZone: {
      description: "Hides the timezone",
    },
    shouldForceLeadingZeros: {
      control: "boolean",
      description:
        "Forces leading zeros on the date input. If this is not set it is determined by the user's locale",
    },
    maxValue: {
      ...dateControl,
      description:
        "The maximum value of the date input. Accepts a value from `@internationalized/date` library",
    },
    minValue: {
      ...dateControl,
      description:
        "The minimum value of the date input. Accepts a value from `@internationalized/date` library",
    },
    hourCycle: {
      control: "select",
      options: [12, 24],
      description: "Use a 12 or 24 hour cycle",
      table: {
        defaultValue: { summary: "the hour cycle of the user's locale" },
      },
    },
    isDateUnavailable: {
      control: false,
      description:
        "A function that is called for every date on the calendar. If it returns true, the date is disabled",
    },
  },
} as Meta<typeof DateInput>;

type Story = StoryObj<typeof DateInput>;

export const Primary: Story = {
  args: {
    defaultValue: date,
    label: "Date input",
    hideTimeZone: true,
  },
};

export const DayGranularity: Story = {
  args: {
    ...Primary.args,
    label: "Birth Date",
    granularity: "day",
    message: "Select your date of birth",
  },
};

export const HourGranularity: Story = {
  args: {
    ...Primary.args,
    label: "Meeting Date & Time",
    granularity: "hour",
    hideTimeZone: false,
    message: "Choose a date and hour",
  },
};

export const MinuteGranularity: Story = {
  args: {
    ...Primary.args,
    label: "Appointment Time",
    granularity: "minute",
    hideTimeZone: false,
    message: "Select date and time to the minute",
  },
};

export const SecondGranularity: Story = {
  args: {
    ...Primary.args,
    label: "Exact Timestamp",
    granularity: "second",
    hideTimeZone: false,
    message: "Precise time with seconds",
  },
};

export const WithError: Story = {
  args: {
    ...Primary.args,
    label: "Event Date",
    isInvalid: true,
    error: "Please enter a valid date",
    message: "Choose when your event will happen",
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    label: "System Date",
    isDisabled: true,
    message: "This date cannot be changed",
  },
};

export const Required: Story = {
  args: {
    ...Primary.args,
    label: "Due Date",
    isRequired: true,
    message: "This field is required",
  },
};

export const ReadOnly: Story = {
  args: {
    ...Primary.args,
    label: "Created Date",
    isReadOnly: true,
    message: "This date is read-only",
  },
};

export const WithLeadingZeros: Story = {
  args: {
    ...Primary.args,
    label: "Formatted Date",
    shouldForceLeadingZeros: true,
    message: "Date with leading zeros (01/05/2024)",
  },
};

export const HourCycle24: Story = {
  args: {
    ...Primary.args,
    label: "24-Hour Format",
    granularity: "minute",
    hourCycle: 24,
    hideTimeZone: false,
    message: "Time in 24-hour format",
  },
};

export const MinAndMaxValues: Story = {
  args: {
    ...Primary.args,
    label: "Delivery Date",
    granularity: "day",
    minValue: date,
    maxValue: date.add({ weeks: 2 }),
    message: "Choose a date in the next two weeks",
  },
};
