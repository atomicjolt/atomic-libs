import { ComponentMeta, ComponentStory } from "@storybook/react";
import Spinner, { Props } from ".";

export default {
title: "Loaders/Spinner",
component: Spinner
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args: Props) => (
  <Spinner {...args} />
);

export const Default = Template.bind({});
Default.args = {}

// Additional stories go here