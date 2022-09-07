import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SelectComponent, { SelectProps } from ".";

export default {
  title: "Dropdowns/Select",
  component: SelectComponent,
} as ComponentMeta<typeof SelectComponent>;

const Template: ComponentStory<typeof SelectComponent> = (
  args: SelectProps
) => (
  <SelectComponent {...args}>
    <option value="none">- Select an option -</option>
    <option value="value1">Option 1</option>
    <option value="value2">Option 2</option>
  </SelectComponent>
);

export const Select = Template.bind({});
Select.args = {
  value: "none",
  label: "Select label",
  message: "",
  hideLabel: false,
  error: "",
  disabled: false,
  required: false,
  size: "medium",
};

// Additional stories go here
