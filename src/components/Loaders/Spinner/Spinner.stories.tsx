import { Meta, StoryObj } from "@storybook/react";
import Spinner from ".";
import { getCssProps } from "@sb/cssprops";

const meta: Meta<typeof Spinner> = {
  title: "Loaders/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Loader"),
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
