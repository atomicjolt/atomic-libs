import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ComboInput } from ".";
import { FieldInput } from "../Field/FieldInput";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { NumberField } from "../NumberField";
import IconButton from "../../Buttons/IconButton";
import { Input } from "../Atoms/Input";

export default {
  title: "Fields/ComboInput",
  component: ComboInput,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof ComboInput>;

type Story = StoryObj<typeof ComboInput>;

export const Primary: Story = {
  args: {
    children: [
      <MaterialIcon icon="search" key="icon" />,
      <Input placeholder="Search" key="actual-input" />,
    ],
  },
};

export const NumberInputWithSearch: Story = {
  render: (args) => (
    <NumberField size="medium">
      <ComboInput {...args}>
        <FieldInput />
        <span>/10</span>
        <IconButton icon="search" variant="ghost" />
      </ComboInput>
    </NumberField>
  ),
};
