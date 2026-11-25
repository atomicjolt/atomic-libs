import { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from ".";

export default {
  title: "Fields/Atoms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    as: { control: false },
  },
} as Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  args: {
    children: "Label",
  },
};
