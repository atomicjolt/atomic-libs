import { Meta, StoryObj } from "@storybook/react";
import { TextArea } from ".";

export default {
  title: "Fields/Atoms/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const Primary: Story = {
  args: {
    placeholder: "Placeholder",
  },
};
