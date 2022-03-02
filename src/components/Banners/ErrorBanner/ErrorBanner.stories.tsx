import { ComponentMeta, ComponentStory } from "@storybook/react";
import ErrorBanner, { Props } from ".";

export default {
title: "Banners/ErrorBanner",
component: ErrorBanner
} as ComponentMeta<typeof ErrorBanner>

const Template: ComponentStory<typeof ErrorBanner> = (args: Props) => (
  <ErrorBanner {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Error text",
}

// Additional stories go here