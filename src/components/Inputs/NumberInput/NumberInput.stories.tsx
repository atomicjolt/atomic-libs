import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NumberInput, { NumberInputProps } from ".";
import {
  InputControls,
  DefaultInputProperties,
  UncontrolledInputControls,
  CenterDecorator,
} from "../../storybook";

export default {
  title: "Inputs/NumberInput",
  component: NumberInput,
  decorators: [CenterDecorator],
  argTypes: InputControls,
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

Uncontrolled.argTypes = UncontrolledInputControls;
