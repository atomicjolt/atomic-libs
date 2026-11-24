import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { SkeletonLoader } from ".";
import { skeleton } from "@styles/theme/component";

export default {
  title: "Feedback/SkeletonLoader",
  component: SkeletonLoader,
  parameters: {
    cssprops: { skeleton },
  },
  argTypes: {
    children: {
      control: false,
      description:
        "SVG shapes (`rect`, `circle`, …) that make up the skeleton. The animated gradient is clipped to them.",
    },
    duration: {
      control: "number",
    },
  },
} as Meta<typeof SkeletonLoader>;

type Story = StoryObj<typeof SkeletonLoader>;

export const List: Story = {
  args: {
    duration: 2,
    width: 400,
    height: 160,
    children: [
      <rect key="1" x="50" y="6" rx="4" ry="4" width="343" height="38" />,
      <rect key="2" x="8" y="6" rx="4" ry="4" width="35" height="38" />,
      <rect key="3" x="50" y="55" rx="4" ry="4" width="343" height="38" />,
      <rect key="4" x="8" y="55" rx="4" ry="4" width="35" height="38" />,
      <rect key="5" x="50" y="104" rx="4" ry="4" width="343" height="38" />,
      <rect key="6" x="8" y="104" rx="4" ry="4" width="35" height="38" />,
    ],
  },
};

export const Profile: Story = {
  args: {
    width: 380,
    height: 70,
    children: [
      <circle key="1" cx="30" cy="30" r="30" />,
      <rect key="2" x="80" y="17" rx="4" ry="4" width="300" height="13" />,
      <rect key="3" x="80" y="40" rx="3" ry="3" width="250" height="10" />,
    ],
  },
};

export const ResponsiveList: Story = {
  args: {
    duration: 2,
    width: "100%",
    height: 160,
    children: [
      <rect key="1" x="50" y="6" rx="4" ry="4" width="95%" height="38" />,
      <rect key="2" x="8" y="6" rx="4" ry="4" width="35" height="38" />,
      <rect key="3" x="50" y="55" rx="4" ry="4" width="95%" height="38" />,
      <rect key="4" x="8" y="55" rx="4" ry="4" width="35" height="38" />,
      <rect key="5" x="50" y="104" rx="4" ry="4" width="95%" height="38" />,
      <rect key="6" x="8" y="104" rx="4" ry="4" width="35" height="38" />,
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
};
