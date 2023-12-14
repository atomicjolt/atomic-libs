import { Meta, StoryObj } from "@storybook/react";
import Spinner from ".";

const meta: Meta<typeof Spinner> = {
  title: "Loaders/Spinner",
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {
  args: {
    loading: true,
  },
};
