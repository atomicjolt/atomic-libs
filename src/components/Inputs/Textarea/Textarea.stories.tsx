import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Textarea, { TextareaProps } from ".";
import { DefaultInputProperties, TextInputControls } from "../../storybook";

const meta: Meta<typeof Textarea> = {
  title: "Inputs/Textarea",
  component: Textarea,
  argTypes: TextInputControls,
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Controlled: Story = {
  args: {
    value: "Text Area content",
    resize: true,
    ...DefaultInputProperties,
    size: "large",
    label: "Textarea label",
    message: "1000 characters",
  },
};

export const Uncontrolled: Story = {
  args: {
    ...Controlled.args,
    value: undefined,
  },
  argTypes: {
    value: {
      control: false,
    },
    onChange: {
      control: false,
    },
  },
};
