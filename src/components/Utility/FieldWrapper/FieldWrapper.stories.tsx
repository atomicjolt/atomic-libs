import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FieldWrapper } from ".";

const meta: Meta<typeof FieldWrapper> = {
  title: "Atoms/FieldWrapper",
  component: FieldWrapper,
  argTypes: {
    children: { control: false },
    label: { control: "text" },
    message: { control: "text" },
    error: { control: "text" },
    hideLabel: { control: "boolean" },
    floating: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof FieldWrapper>;

export const Primary: Story = {
  args: {
    label: "Label",
    message: "Message",
    error: "Error",
    hideLabel: false,
    floating: false,
    children: <input />,
  },
};
