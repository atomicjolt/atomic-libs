import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ToggleSwitchComponent, { ToggleSwitchProps } from ".";
import { InputControls } from "../../storybook";

export default {
  title: "Inputs/ToggleSwitch",
  component: ToggleSwitchComponent,
  parameters: {
    argTypes: InputControls,
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
