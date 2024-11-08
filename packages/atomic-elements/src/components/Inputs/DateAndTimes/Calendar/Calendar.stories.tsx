import { Meta, StoryObj } from "@storybook/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { Calendar } from ".";

const meta: Meta<typeof Calendar> = {
  title: "Inputs/Date & Time/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: false,
      description:
        "The current value of the input. Accepts a object from the `@internationalized/date` library.",
    },
    defaultValue: {
      control: false,
      description:
        "Set the initial value of an uncontrolled input. Accepts a object from the `@internationalized/date` library.",
    },
    defaultFocusedValue: {
      control: false,
      description:
        "Set the initial focused value of an uncontrolled input. Accepts a object from the `@internationalized/date` library.",
    },
    focusedValue: {
      control: false,
      description:
        "The current focused value of the input. Accepts a object from the `@internationalized/date` library.",
    },
    isDateUnavailable: {
      control: false,
      description:
        "A function that is called for every date on the calendar. If it returns true, the date is disabled.",
    },
    maxValue: {
      control: false,
      description:
        "The maximum date that can be selected. Accepts a object from the `@internationalized/date` library.",
    },
    minValue: {
      control: false,
      description:
        "The minimum date that can be selected. Accepts a object from the `@internationalized/date` library.",
    },
    onFocusChange: {
      control: false,
      description: "Callback for when the focus date changes.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  args: {
    size: "medium",
  },
};

const date = today(getLocalTimeZone());
const minValue = date.set({ month: date.month - 1 });
const maxValue = date.set({ month: date.month + 1 });

export const WithDefaultValue: Story = {
  args: {
    ...Primary.args,
    defaultValue: date,
  },
};

export const WithMaxAndMinValues: Story = {
  args: {
    ...Primary.args,
    defaultValue: date,
    minValue,
    maxValue,
  },
};
