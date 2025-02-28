import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SkeletonLoader } from ".";
import { getCssProps } from "@sb/cssprops";

export default {
  title: "Feedback/SkeletonLoader",
  component: SkeletonLoader,
  parameters: {
    cssprops: getCssProps("SkeletonLoader"),
  },
} as Meta<typeof SkeletonLoader>;

type Story = StoryObj<typeof SkeletonLoader>;

export const List: Story = {
  args: {
    duration: 2,
    width: 400,
    height: 160,
    children: [
      <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />,
      <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />,
      <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />,
      <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />,
      <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />,
      <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />,
    ],
  },
};

export const Profile: Story = {
  args: {
    width: 380,
    height: 70,
    children: [
      <circle cx="30" cy="30" r="30" />,
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />,
      <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />,
    ],
  },
};

export const ResponsiveList: Story = {
  args: {
    duration: 2,
    width: "100%",
    height: 160,
    children: [
      <rect x="50" y="6" rx="4" ry="4" width="95%" height="38" />,
      <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />,
      <rect x="50" y="55" rx="4" ry="4" width="95%" height="38" />,
      <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />,
      <rect x="50" y="104" rx="4" ry="4" width="95%" height="38" />,
      <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />,
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
};
