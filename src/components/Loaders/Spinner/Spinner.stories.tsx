import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SpinneComponent, { SpinnerProps } from ".";

export default {
  title: "Loaders/Spinner",
  component: SpinneComponent,
} as ComponentMeta<typeof SpinneComponent>;

const Template: ComponentStory<typeof SpinneComponent> = (
  args: SpinnerProps
) => <SpinneComponent {...args} />;

export const Spinner = Template.bind({});
Spinner.args = {
  loading: true,
};

// Additional stories go here
