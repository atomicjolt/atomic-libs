import { Meta, StoryObj } from "@storybook/react";
import ThreeDotLoader from ".";
import { getCssProps } from "@sb/cssprops";

const meta: Meta<typeof ThreeDotLoader> = {
  title: "Loaders/ThreeDotLoader",
  component: ThreeDotLoader,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Loader"),
  },
};

export default meta;

type Story = StoryObj<typeof ThreeDotLoader>;

export const Primary: Story = {
  args: {
    isLoading: true,
    isCentered: true,
  },
};
