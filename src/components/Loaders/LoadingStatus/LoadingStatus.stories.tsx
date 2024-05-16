import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import LoadingStatus from ".";
import { getCssProps } from "@sb/cssprops";

const meta: Meta<typeof LoadingStatus> = {
  title: "Loaders/LoadingStatus",
  component: LoadingStatus,
  parameters: {
    layout: "centered",
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
    renderLoading: (isLoading, message) => (
      <div>
        <h1>Loading...</h1>
        <p>{message}</p>
      </div>
    ),
  },
};
