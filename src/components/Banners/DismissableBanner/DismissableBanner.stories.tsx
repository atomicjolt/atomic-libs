import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import DismissableBanner, { ErrorBanner, WarningBanner } from ".";

export default {
  title: "Banners/DismissableBanner",
  component: DismissableBanner,
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "warning", "success", "error"],
    },
    iconVariant: {
      control: "select",
      options: ["default", "outlined", "rounded", "two-tone", "sharp"],
    },
  },
} as Meta<typeof DismissableBanner>;

type Story = StoryObj<typeof DismissableBanner>;

export const Info: Story = {
  args: {
    children: "Notification Settings Saved",
    variant: "info",
    icon: "info",
    autoDismiss: false,
  },
};

export const Error: Story = {
  render: (props) => <ErrorBanner {...props} />,
  args: {
    children: "Something went wrong",
    autoDismiss: false,
  },
};

export const Warning: Story = {
  render: (props) => <WarningBanner {...props} />,
  args: {
    children: "Something went wrong",
    autoDismiss: false,
  },
};
