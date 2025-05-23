import { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from ".";

export default {
title: "ScrollArea",
component:ScrollArea
} as Meta<typeof ScrollArea>

type Story = StoryObj<typeof ScrollArea>

export const Primary: Story = {
  args: {
  }
};
