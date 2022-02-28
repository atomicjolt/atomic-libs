import { ComponentMeta, ComponentStory } from "@storybook/react";
import Checkbox, { Props } from ".";

export default {
title: "Inputs/Checkbox",
component: Checkbox
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args: Props) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox label",
}

// Additional stories go here