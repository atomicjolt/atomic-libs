import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Textarea, { TextAreaProps } from ".";
import { DefaultInputProperties } from "../../../utils";

export default {
  title: "Inputs/Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args: TextAreaProps) => (
  <Textarea {...args} />
);

export const Controlled = Template.bind({});
Controlled.args = {
  value: "Text Area content",
  resize: true,
  ...(DefaultInputProperties as TextAreaProps),
  label: "Textarea label",
  message: "1000 characters",
};

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  ...Controlled.args,
  value: undefined,
};

Uncontrolled.argTypes = {
  value: {
    control: false,
  },
  onChange: {
    control: false,
  },
};
