import { Meta, StoryObj } from "@storybook/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import Calendar from ".";

const meta: Meta<typeof Calendar> = {
  title: "Inputs/Date & Time/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: false,
    },
    onChange: {
      control: false,
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  args: {
    size: "medium",
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    errorMessage: "",
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
