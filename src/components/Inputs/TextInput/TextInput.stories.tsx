import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextInput from ".";
import {
  InputControls,
  DefaultInputProperties,
  TextInputControls,
} from "../../storybook";
import { TextInputProps } from "./TextInput.types";

export default {
  title: "Inputs/TextInput",
  component: TextInput,
  argTypes: TextInputControls,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args: TextInputProps) => {
  return <TextInput {...args} />;
};

export const Controlled = Template.bind({});
Controlled.args = {
  value: "",
  type: "text",
  variant: "default",
  ...DefaultInputProperties,
  label: "Text input label",
  placeholder: "",
  readOnly: false,
};

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  type: "text",
  variant: "default",
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
