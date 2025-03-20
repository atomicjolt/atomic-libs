import { Meta, StoryObj } from "@storybook/react";
import { Loading } from ".";

export default {
title: "Loading",
component:Loading
} as Meta<typeof Loading>

type Story = StoryObj<typeof Loading>

export const Primary: Story = {
  args: {
  }
};
