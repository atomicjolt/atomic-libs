import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Checkbox, { CheckboxProps } from ".";
import { InputControls } from "../../storybook";

export default {
  title: "Inputs/Checkbox",
  component: Checkbox,
  argTypes: InputControls,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => (
  <Checkbox {...args} />
);

export const Controlled = Template.bind({});
Controlled.args = {
  checked: false,
  label: "Checkbox label",
  error: "",
  message: "",
  disabled: false,
  required: false,
};

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  ...Controlled.args,
  checked: undefined,
  label: "Checkbox label",
};

Uncontrolled.argTypes = {
  checked: {
    control: false,
  },
};
