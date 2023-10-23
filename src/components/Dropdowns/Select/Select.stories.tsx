import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  InputControls,
  DefaultInputProperties,
  inputProperties,
  disableControl,
} from "../../storybook";
import SelectComponent, { SelectProps } from ".";

export default {
  title: "Dropdowns/Select",
  component: SelectComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: "select",
      options: ["none", "value1", "value2"],
    },
    ...InputControls,
    ...disableControl("readOnly"),
    ...disableControl("placeholder"),
  },
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
  ...DefaultInputProperties,
  ...inputProperties({ filter: ["placeholder", "readOnly"] }),
  label: "Select label",
  size: "medium",
};
