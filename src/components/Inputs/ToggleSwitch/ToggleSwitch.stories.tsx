import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ToggleSwitchComponent, { ToggleSwitchProps } from ".";

export default {
  title: "Inputs/ToggleSwitch",
  component: ToggleSwitchComponent,
  parameters: {
    argTypes: {
      onChange: {
        control: false,
      },
    },
  },
} as ComponentMeta<typeof ToggleSwitchComponent>;

const Template: ComponentStory<typeof ToggleSwitchComponent> = (
  args: ToggleSwitchProps
) => <ToggleSwitchComponent {...args} />;

export const ToggleSwitch = Template.bind({});
ToggleSwitch.args = {
  checked: false,
  label: "Toggle switch",
  disabled: false,
};
