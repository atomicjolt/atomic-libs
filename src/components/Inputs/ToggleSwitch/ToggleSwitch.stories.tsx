import { ComponentMeta, ComponentStory } from "@storybook/react";
import ToggleSwitch, { Props } from ".";

export default {
title: "Inputs/ToggleSwitch",
component: ToggleSwitch
} as ComponentMeta<typeof ToggleSwitch>

const Template: ComponentStory<typeof ToggleSwitch> = (args: Props) => (
  <ToggleSwitch {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Toggle switch",
}

// Additional stories go here