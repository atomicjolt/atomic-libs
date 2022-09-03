import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import Combobox, { ComboboxProps } from ".";
import { DefaultInputProperties } from "../../../utils";

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
  variant: "default",
  options: ["Option 1", "Option 2", "Option 3"],
  ...DefaultInputProperties,
  label: "Combobox label",
};
