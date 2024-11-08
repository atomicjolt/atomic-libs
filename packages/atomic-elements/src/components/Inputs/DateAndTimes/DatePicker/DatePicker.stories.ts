import { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from ".";
import { now, getLocalTimeZone } from "@internationalized/date";
import { TextInputControls } from "@sb/helpers";

export default {
  title: "Inputs/Date & Time/DatePicker",
  component: DatePicker,
  argTypes: {
    ...TextInputControls,
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
    label: "Date Picker",
    size: "medium",
    hideTimeZone: true,
  },
};

export const DayGranularity: Story = {
  args: {
    ...Primary.args,
    granularity: "day",
  },
};
