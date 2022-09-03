import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextInput from ".";
import { DefaultInputProperties } from "../../../utils";
import { TextInputProps } from "./TextInput.types";

export default {
  title: "Inputs/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args: TextInputProps) => {
  return <TextInput {...args} />;
};

export const Controlled = Template.bind({});
Controlled.args = {
  value: "",
  variant: "default",
  type: "text",
  ...DefaultInputProperties,
  label: "Text input label",
  placeholder: "",
  readonly: false,
};

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  variant: "default",
  type: "text",
  ...DefaultInputProperties,
  label: "Text input label",
  placeholder: "",
  readonly: false,
};

Uncontrolled.argTypes = {
  value: {
    control: false,
  },
  onChange: {
    control: false,
  },
};
