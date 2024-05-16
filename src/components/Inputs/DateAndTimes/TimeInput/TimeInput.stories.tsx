import { Meta, StoryObj } from "@storybook/react";
import { TimeInput } from ".";
import { now, getLocalTimeZone } from "@internationalized/date";
import { TextInputControls } from "@sb/helpers";

export default {
  title: "Inputs/Date & Time/TimeInput",
  component: TimeInput,
  argTypes: {
    ...TextInputControls,
    value: {
      control: false,
      description:
        "The value of the time input. Accepts a `Time` from `@internationalized/date` library",
    },
    granularity: {
      control: "select",
      options: ["hour", "minute", "second"],
      description: "The granularity of the time input",
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
  },
} as Meta<typeof TimeInput>;

type Story = StoryObj<typeof TimeInput>;

const date = now(getLocalTimeZone());

export const Primary: Story = {
  args: {
    defaultValue: date,
    label: "Date input",
    size: "medium",
    hideTimeZone: true,
    shouldForceLeadingZeros: false,
    isInvalid: false,
  },
};

export const SecondGranularity: Story = {
  args: {
    ...Primary.args,
    granularity: "second",
  },
};
