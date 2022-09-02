import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import Combobox, { Props } from ".";
import { DefaultInputProperties } from "../../../utils";

export default {
  title: "Dropdowns/ComboboxFloating",
  component: Combobox,
} as ComponentMeta<typeof Combobox>;

const Template: ComponentStory<typeof Combobox> = (args: Props) => {
  return <Combobox {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  value: "",
  options: ["Option 1", "Option 2", "Option 3"],
  ...DefaultInputProperties,
  label: "Combobox label",
};

// Additional stories go here
