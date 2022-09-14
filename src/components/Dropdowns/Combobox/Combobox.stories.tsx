import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DefaultInputProperties } from "../../storybook";
import Combobox from ".";
import { ComboboxProps } from "./Combobox.types";

export default {
  title: "Dropdowns/Combobox",
  component: Combobox,
} as ComponentMeta<typeof Combobox>;

const Template: ComponentStory<typeof Combobox> = (args: ComboboxProps) => {
  return <Combobox {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  value: "",
  options: ["Option 1", "Option 2", "Option 3"],
  variant: "default",
  ...DefaultInputProperties,
  label: "Combobox label",
};
