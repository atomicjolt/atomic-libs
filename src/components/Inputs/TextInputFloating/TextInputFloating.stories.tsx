import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextInputFloating, { TextInputFloatingProps } from ".";
import { DefaultInputProperties } from "../../../utils";

export default {
  title: "Inputs/TextInputFloating",
  component: TextInputFloating,
} as ComponentMeta<typeof TextInputFloating>;

const Template: ComponentStory<typeof TextInputFloating> = (
  args: TextInputFloatingProps
) => {
  return <TextInputFloating {...args} />;
};

export const Controlled = Template.bind({});
Controlled.args = {
  value: "",
  type: "text",
  ...DefaultInputProperties,
  label: "Text input label",
  placeholder: "",
  readonly: false,
};

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
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
