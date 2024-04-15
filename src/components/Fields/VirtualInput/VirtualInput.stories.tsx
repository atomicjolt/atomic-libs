import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { VirtualInput } from ".";
import { Input } from "../Field/FieldInput";
import { MaterialIcon } from "../../Icons/MaterialIcon";

export default {
  title: "Fields/VirtualInput",
  component: VirtualInput,
} as Meta<typeof VirtualInput>;

type Story = StoryObj<typeof VirtualInput>;

export const Default: Story = {
  args: {
    children: [<MaterialIcon icon="search" />, <Input placeholder="Search" />],
  },
};
