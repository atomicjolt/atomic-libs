import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { NewInputControls, disableControl } from "../../storybook";
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
      options: ["value1", "value2", "value3"],
    },
    ...NewInputControls,
    ...disableControl("isReadOnly"),
    ...disableControl("placeholder"),
    ...disableControl("children"),
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    value: "value1",
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
