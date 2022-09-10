import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Combobox from "./variants/DefaultCombobox";
import { DefaultInputProperties } from "../../storybook";
import { ComboboxProps } from "./Combobox.types";
import FloatingCombobox from "./variants/FloatingCombobox";

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
  ...DefaultInputProperties,
  label: "Combobox label",
};

const FloatingTemplate: ComponentStory<typeof FloatingCombobox> = (
  args: ComboboxProps
) => {
  return <FloatingCombobox {...args} />;
};

export const Floating = FloatingTemplate.bind({});
Floating.args = Default.args;
