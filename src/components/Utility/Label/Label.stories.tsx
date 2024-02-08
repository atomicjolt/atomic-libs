import { Meta, StoryObj } from "@storybook/react";
import Label from ".";

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  args: {
    children: "This is a Label",
    message: "This is a message beneath the label",
    error: "This is an error",
    hidden: false,
  },
};
