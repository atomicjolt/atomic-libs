import { Meta, StoryObj } from "@storybook/react";
import {
  InputControls,
  inputProperties,
  disableControl,
  NewInputControls,
} from "../../storybook";
import CheckBox from ".";

const meta: Meta<typeof CheckBox> = {
  title: "Inputs/Choose State/Checkbox",
  component: CheckBox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...NewInputControls,
    // @ts-ignore
    label: {},
    hideLabel: {},
    isReadOnly: {
      table: {
        category: "Field State",
      },
    },
    defaultSelected: {
      type: "boolean",
      description:
        "Default selected state of the checkbox in an uncontrolled component.",
    },
    isSelected: {
      type: "boolean",
      description: "Selected state of the checkbox in a controlled component.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Primary: Story = {
  args: {
    children: "Checkbox Label",
  },
};
