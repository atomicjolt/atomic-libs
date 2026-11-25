import { Meta, StoryObj } from "@storybook/react-vite";
import { Message } from ".";

export default {
  title: "Fields/Atoms/Message",
  component: Message,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    as: { control: false },
    size: {
      table: { defaultValue: { summary: '"auto"' } },
    },
  },
} as Meta<typeof Message>;

type Story = StoryObj<typeof Message>;

export const Primary: Story = {
  args: {
    children: "Message",
  },
};
