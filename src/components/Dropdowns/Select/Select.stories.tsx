import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  InputControls,
  DefaultInputProperties,
  inputProperties,
  disableControl,
} from "../../storybook";
import Select from ".";

const meta: Meta<typeof Select> = {
  title: "Dropdowns/Select",
  component: Select,
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
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  render: (args) => (
    <Select {...args}>
      <option value="none">- Select an option -</option>
      <option value="value1">Option 1</option>
      <option value="value2">Option 2</option>
    </Select>
  ),
  args: {
    value: "none",
    ...DefaultInputProperties,
    ...inputProperties({ filter: ["placeholder", "readOnly"] }),
    label: "Select label",
    size: "medium",
  },
};
