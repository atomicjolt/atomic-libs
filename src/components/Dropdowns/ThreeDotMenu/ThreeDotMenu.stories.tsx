import { ComponentMeta, ComponentStory } from "@storybook/react";
import ThreeDotMenu, { Props } from ".";

export default {
title: "Dropdowns/ThreeDotMenu",
component: ThreeDotMenu
} as ComponentMeta<typeof ThreeDotMenu>

const Template: ComponentStory<typeof ThreeDotMenu> = (args: Props) => (
  <ThreeDotMenu {...args}>
    <span>Option 1</span>
  </ThreeDotMenu>
);

export const Default = Template.bind({});
Default.args = {
  label: "Custom dropdown label",
}

// Additional stories go here