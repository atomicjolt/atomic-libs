import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tabs, { Props } from ".";

export default {
title: "Tabs/Tabs",
component: Tabs
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args: Props) => (
  <Tabs {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Tab Label",
  linkTarget: "https://www.atomicjolt.com/",
}

// Additional stories go here