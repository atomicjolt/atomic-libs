import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DismissableBanner, ErrorBanner, WarningBanner } from ".";
import { getCssProps } from "@sb/cssprops";

export default {
  title: "Banners/DismissableBanner",
  component: DismissableBanner,
  parameters: {
    cssprops: getCssProps("Banner"),
  },
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
  },
};

export const Error: Story = {
  render: (props) => <ErrorBanner {...props} />,
  args: {
    children: "Something went wrong",
  },
};

export const Warning: Story = {
  render: (props) => <WarningBanner {...props} />,
  args: {
    children: "Something went wrong",
  },
};
