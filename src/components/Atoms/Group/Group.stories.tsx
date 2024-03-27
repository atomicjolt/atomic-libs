import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Group } from ".";
import Button from "../../Buttons/Button";
import TextInput from "../../Inputs/TextInput";

export default {
  title: "Layouts/Group",
  component: Group,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Group>;

type Story = StoryObj<typeof Group>;

export const Buttons: Story = {
  args: {
    isMerged: true,
    children: [
      <Button key="1" variant="secondary">
        Button 1
      </Button>,
      <Button key="2" variant="secondary">
        Button 2
      </Button>,
      <Button key="3" variant="secondary">
        Button 3
      </Button>,
    ],
  },
};

export const InputsAndButton: Story = {
  args: {
    isMerged: true,
    children: [
      <TextInput key="1" label="Password" hideLabel placeholder="Username" />,
      <TextInput key="2" label="Password" hideLabel placeholder="Password" />,
      <Button key="2" variant="primary">
        Login
      </Button>,
    ],
  },
};
