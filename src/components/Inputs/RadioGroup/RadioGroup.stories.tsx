import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import RadioGroupComponent, { RadioGroupsProps } from ".";
import Radio from "./Radio";

export default {
  title: "Inputs/RadioGroup",
  component: RadioGroupComponent,
  argTypes: {
    children: {
      control: false,
    },
    onChange: {
      control: false,
    },
  },
  subcomponents: {
    Radio,
  },
} as ComponentMeta<typeof RadioGroupComponent>;

const Template: ComponentStory<typeof RadioGroupComponent> = (
  args: RadioGroupsProps
) => (
  <RadioGroupComponent {...args}>
    <Radio value="opt1">Option 1</Radio>
    <Radio value="opt2">Option 2</Radio>
    <Radio value="opt3">Option 3</Radio>
  </RadioGroupComponent>
);

export const RadioGroup = Template.bind({});

RadioGroup.args = {
  value: "opt1",
  name: "radiogroup",
  label: "Radio Group Label",
  hideLabel: false,
  error: "",
  message: "",
  disabled: false,
};

RadioGroup.argTypes = {
  value: {
    control: "select",
    options: ["opt1", "opt2", "opt3"],
  },
};
