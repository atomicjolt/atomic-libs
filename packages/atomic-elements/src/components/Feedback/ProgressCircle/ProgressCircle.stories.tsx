import { Meta, StoryObj } from "@storybook/react";
import { ProgressCircle } from ".";

export default {
title: "ProgressCircle",
component:ProgressCircle
} as Meta<typeof ProgressCircle>

type Story = StoryObj<typeof ProgressCircle>

export const Primary: Story = {
  args: {
  }
};
