import { Meta, StoryObj } from "@storybook/react";
import { Message } from ".";

export default {
  title: "Fields/Atoms/Message",
  component: Message,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Message>;

type Story = StoryObj<typeof Message>;

export const Primary: Story = {
  args: {
    children: "Message",
  },
};
