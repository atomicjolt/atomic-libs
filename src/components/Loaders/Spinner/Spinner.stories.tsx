import { Meta, StoryObj } from "@storybook/react";
import Spinner from ".";

const meta: Meta<typeof Spinner> = {
  title: "Loaders/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {
  args: {
    isLoading: true,
    isCentered: true,
  },
};
