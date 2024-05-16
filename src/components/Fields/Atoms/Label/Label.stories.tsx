import { Meta, StoryObj } from "@storybook/react";
import { Label } from ".";

export default {
  title: "Fields/Atoms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  args: {
    children: "Label",
  },
};
