import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import RadioGroup, { Radio } from ".";

const meta: Meta<typeof RadioGroup> = {
  title: "Inputs/Choose State/RadioGroup",
  component: RadioGroup,
  argTypes: {
    children: {
      control: false,
    },
    onChange: {
      control: false,
    },
    error: {
      control: "text",
    },
    value: {
      control: "select",
      options: ["opt1", "opt2", "opt3"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
  args: {
    value: "opt1",
    name: "radiogroup",
    label: "Radio Group Label",
    hideLabel: false,
    error: "",
    message: "",
    disabled: false,
    children: [
      <Radio value="opt1">Option 1</Radio>,
      <Radio value="opt2">Option 2</Radio>,
      <Radio value="opt3">Option 3</Radio>,
    ],
  },
};
