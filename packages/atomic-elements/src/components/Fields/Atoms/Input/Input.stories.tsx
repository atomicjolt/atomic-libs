import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

export default {
  title: "Fields/Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    placeholder: "Type something...",
    type: "text",
  },
};
