import { Meta, StoryObj } from "@storybook/react";
import TimePicker from ".";

const meta: Meta<typeof TimePicker> = {
  title: "Inputs/Date & Time/TimePicker",
  component: TimePicker,
  argTypes: {
    onChange: { control: false, table: { category: "actions" } },
  },
};

export default meta;

type Story = StoryObj<typeof TimePicker>;

export const Primary: Story = {
  args: {
    time: { hours: 12, minutes: 15 },
  },
};
