import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ToggleSwitch, { ToggleSwitchProps } from ".";

export default {
  title: "Inputs/ToggleSwitch",
  component: ToggleSwitch,
  parameters: {
    argTypes: {
      onChange: {
        control: false,
      },
    },
  },
} as ComponentMeta<typeof ToggleSwitch>;

const Template: ComponentStory<typeof ToggleSwitch> = (
  args: ToggleSwitchProps
) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  label: "Toggle switch",
  disabled: false,
};
