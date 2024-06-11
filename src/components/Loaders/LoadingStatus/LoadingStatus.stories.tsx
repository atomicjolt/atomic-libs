import { Meta, StoryObj } from "@storybook/react";
import LoadingStatus from ".";
import { getCssProps } from "@sb/cssprops";
import Spinner from "../Spinner";

const meta: Meta<typeof LoadingStatus> = {
  title: "Loaders/LoadingStatus",
  component: LoadingStatus,
  parameters: {
    cssprops: getCssProps("Loader"),
  },
  argTypes: {
    loadingMessage: {
      type: "string",
    },
    error: {
      type: "string",
    },
  },
};

export default meta;

type Story = StoryObj<typeof LoadingStatus>;

export const Primary: Story = {
  args: {
    isLoading: true,
    loadingMessage: "Loading...",
    error: "",
    children: "This is the content",
  },
};

export const Error: Story = {
  args: {
    isLoading: false,
    loadingMessage: "",
    error: "An error occurred",
    children: "This is the content",
  },
};

export const CustomizeLoadingState: Story = {
  args: {
    isLoading: true,
    loadingMessage: "Loading...",
    error: "",
    children: "This is the content",
    renderLoading: <Spinner />,
  },
};
