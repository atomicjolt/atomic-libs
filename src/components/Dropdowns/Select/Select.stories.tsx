import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputControls } from "@sb/helpers";
import Select from ".";

const meta: Meta<typeof Select> = {
  title: "Dropdowns/Selection/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: "select",
      options: ["value1", "value2", "value3"],
    },
    ...InputControls,
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: "Select label",
    size: "medium",
    children: [
      <option value="value1" key="1">
        Option 1
      </option>,
      <option value="value2" key="2">
        Option 2
      </option>,
      <option value="value3" key="3">
        Option 3
      </option>,
    ],
  },
};
