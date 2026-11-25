import { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorMessage } from ".";

export default {
  title: "Fields/Atoms/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    as: { control: false },
    size: {
      table: { defaultValue: { summary: '"medium"' } },
    },
  },
} as Meta<typeof ErrorMessage>;

type Story = StoryObj<typeof ErrorMessage>;

export const Primary: Story = {
  args: {
    children: "Error Message",
    isInvalid: true,
  },
};
