import { Meta, StoryObj } from "@storybook/react";
import { DefaultInputProperties, InputControls } from "../../storybook";
import Combobox from ".";

const meta: Meta<typeof Combobox> = {
  title: "Dropdowns/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
  },
  argTypes: InputControls,
};

export default meta;

type Story = StoryObj<typeof Combobox>;

export const Primary: Story = {
  args: {
    value: "",
    options: ["Option 1", "Option 2", "Option 3"],
    variant: "default",
    ...DefaultInputProperties,
    label: "Combobox label",
  },
};
