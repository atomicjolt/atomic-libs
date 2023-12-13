import { Meta, StoryObj } from "@storybook/react";
import {
  InputControls,
  inputProperties,
  disableControl,
} from "../../storybook";
import Checkbox, { CheckboxProps } from ".";

const meta: Meta<CheckboxProps> = {
  title: "Inputs/Choose State/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...InputControls,
    ...disableControl("readOnly"),
    ...disableControl("placeholder"),
  },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Primary: Story = {
  args: {
    checked: false,
    ...inputProperties({ filter: ["placeholder", "readOnly", "defaultValue"] }),
    label: "Checkbox label",
  },
};
