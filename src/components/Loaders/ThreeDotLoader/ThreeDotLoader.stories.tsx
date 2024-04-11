import { Meta, StoryObj } from "@storybook/react";
import ThreeDotLoader from ".";

const meta: Meta<typeof ThreeDotLoader> = {
  title: "Loaders/ThreeDotLoader",
  component: ThreeDotLoader,
};

export default meta;

type Story = StoryObj<typeof ThreeDotLoader>;

export const Primary: Story = {
  args: {
    isLoading: true,
    isCentered: true,
  },
};
