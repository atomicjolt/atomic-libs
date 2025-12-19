import { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from ".";
import { now, getLocalTimeZone } from "@internationalized/date";
import { TextInputControls } from "@sb/helpers";

export default {
  title: "Inputs/Date & Time/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...TextInputControls,
    calendarSize: {
      control: "select",
      options: ["small", "medium", "large"],
      defaultValue: "small",
      description: "The size of the calendar popup",
    },
    value: {
      control: false,
      description:
        "The value of the date input. Accepts a value from `@internationalized/date` library",
    },
    granularity: {
      control: "select",
      options: ["day", "hour", "minute", "second"],
      description: "The granularity of the date input",
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
      control: false,
      description:
        "The maximum value of the date input. Accepts a value from `@internationalized/date` library",
    },
    minValue: {
      control: false,
      description:
        "The minmum value of the date input. Accepts a value from `@internationalized/date` library",
    },
    hourCycle: {
      control: "select",
      options: [12, 24],
      defaultValue: "12",
      description: "Use a 12 or 24 hour cycle",
    },
    isDateUnavailable: {
      control: false,
      description:
        "A function that is called for every date on the calendar. If it returns true, the date is disabled",
    },
  },
} as Meta<typeof DatePicker>;

type Story = StoryObj<typeof DatePicker>;

const date = now(getLocalTimeZone());

export const Primary: Story = {
  args: {
    defaultValue: date,
    label: "Date picker",
    size: "medium",
    hideTimeZone: true,
    shouldForceLeadingZeros: false,
    isInvalid: false,
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
