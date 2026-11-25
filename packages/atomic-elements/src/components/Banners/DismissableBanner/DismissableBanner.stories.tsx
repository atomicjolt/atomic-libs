import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { DismissableBanner, ErrorBanner, WarningBanner } from ".";
import { banner } from "@styles/theme/component";
import { RenderPropsArgTypes } from "@sb/helpers";
import { fn } from "storybook/test";

export default {
  title: "Banners/DismissableBanner",
  component: DismissableBanner,
  parameters: {
    cssprops: { banner },
  },
  argTypes: {
    ...RenderPropsArgTypes,
    variant: {
      control: "select",
      options: ["info", "warning", "success", "error"],
    },
    iconVariant: {
      control: "select",
      options: ["default", "outlined", "round", "sharp", "two-tone"],
    },
  },
} as Meta<typeof DismissableBanner>;

type Story = StoryObj<typeof DismissableBanner>;

export const Info: Story = {
  args: {
    children: "Notification Settings Saved",
    variant: "info",
    icon: "info",
    onDismiss: fn(),
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
