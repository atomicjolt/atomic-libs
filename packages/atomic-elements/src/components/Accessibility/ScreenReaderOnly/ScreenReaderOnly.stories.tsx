import { Meta, StoryObj } from "@storybook/react";
import { ScreenReaderOnly } from ".";

export default {
title: "ScreenReaderOnly",
component:ScreenReaderOnly
} as Meta<typeof ScreenReaderOnly>

type Story = StoryObj<typeof ScreenReaderOnly>

export const Primary: Story = {
  args: {
  }
};
