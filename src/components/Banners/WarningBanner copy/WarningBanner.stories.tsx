import { ComponentMeta, ComponentStory } from "@storybook/react";
import WarningBanner, { Props } from ".";

export default {
title: "Banners/WarningBanner",
component: WarningBanner
} as ComponentMeta<typeof WarningBanner>

const Template: ComponentStory<typeof WarningBanner> = (args: Props) => (
  <WarningBanner {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Warning text",
}

// Additional stories go here