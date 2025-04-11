import { Meta, StoryObj } from "@storybook/react";
import { ErrorMessage } from ".";

export default {
  title: "Fields/Atoms/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof ErrorMessage>;

type Story = StoryObj<typeof ErrorMessage>;

export const Primary: Story = {
  args: {
    children: "Error Message",
    isInvalid: true,
  },
};
