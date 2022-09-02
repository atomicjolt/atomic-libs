import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NumberInput, { NumberInputProps } from ".";
import { DefaultInputProperties } from "../../../utils";

export default {
  title: "Inputs/NumberInput",
  component: NumberInput,
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (
  args: NumberInputProps
) => <NumberInput {...args} />;

export const Controlled = Template.bind({});
Controlled.args = {
  value: 10,
  min: 0,
  max: undefined,
  ...DefaultInputProperties,
  size: "small",
  label: "Number input label",
};

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  min: 0,
  max: 10,
  label: "Number input label",
};

Uncontrolled.argTypes = {
  value: {
    control: false,
  },
  onChange: {
    control: false,
  },
};

// Additional stories go here
