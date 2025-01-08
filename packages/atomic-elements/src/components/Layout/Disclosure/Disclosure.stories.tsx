import { Meta, StoryObj } from "@storybook/react";
import { Disclosure } from ".";

export default {
title: "Disclosure",
component:Disclosure
} as Meta<typeof Disclosure>

type Story = StoryObj<typeof Disclosure>

export const Primary: Story = {
  args: {
  }
};
