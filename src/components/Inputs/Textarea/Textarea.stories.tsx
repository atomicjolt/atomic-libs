import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Textarea, { TextareaProps } from ".";
import { DefaultInputProperties, TextInputControls } from "../../storybook";

export default {
  title: "Inputs/Textarea",
  component: Textarea,
  argTypes: TextInputControls,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args: TextareaProps) => (
  <Textarea {...args} />
);

export const Controlled = Template.bind({});
Controlled.args = {
  value: "Text Area content",
  resize: true,
  ...DefaultInputProperties,
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
