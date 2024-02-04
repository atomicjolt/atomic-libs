import { Meta, StoryObj } from "@storybook/react";
import LoadingStatus from ".";

const meta: Meta<typeof LoadingStatus> = {
  title: "Loaders/LoadingStatus",
  component: LoadingStatus,
};

export default meta;

type Story = StoryObj<typeof LoadingStatus>;

export const Primary: Story = {
  args: {
    loading: true,
    loadingMessage: "Loading...",
    error: "",
    children: "This is the content",
  },
};
