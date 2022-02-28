import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomDropdown, { Props } from ".";

export default {
title: "Dropdowns/CustomDropdown",
component: CustomDropdown
} as ComponentMeta<typeof CustomDropdown>

const Template: ComponentStory<typeof CustomDropdown> = (args: Props) => (
  <CustomDropdown {...args}>
    <span>Option 1</span>
  </CustomDropdown>
);

export const Default = Template.bind({});
Default.args = {
  label: "Custom dropdown label",
}

// Additional stories go here