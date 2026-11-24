import { Meta, StoryObj } from "@storybook/react-vite";
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
      control: false,
      description:
        "The maximum value of the time input. Accepts a value from `@internationalized/date` library",
    },
    minValue: {
      control: false,
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

const date = now(getLocalTimeZone());

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
