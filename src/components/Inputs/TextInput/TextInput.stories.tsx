import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextInput, { FloatingTextInput } from ".";
import { InputControls, DefaultInputProperties } from "../../storybook";
import { TextInputProps } from "./TextInput.types";

export default {
  title: "Inputs/TextInput",
  component: TextInput,
  argTypes: InputControls,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args: TextInputProps) => {
  return <TextInput {...args} />;
};

export const Controlled = Template.bind({});
Controlled.args = {
  value: "",
  type: "text",
  ...DefaultInputProperties,
  label: "Text input label",
  placeholder: "",
  readOnly: false,
};

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  type: "text",
  ...DefaultInputProperties,
  label: "Text input label",
  placeholder: "",
  readOnly: false,
};

Uncontrolled.argTypes = {
  value: {
    control: false,
  },
  ...InputControls,
};

const FloatingTemplate: ComponentStory<typeof FloatingTextInput> = (
  args: TextInputProps
) => {
  return <FloatingTextInput {...args} />;
};

export const Floating = FloatingTemplate.bind({});
Floating.args = Controlled.args;
