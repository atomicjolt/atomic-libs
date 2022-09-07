import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ThreeDotLoaderComponent, { ThreeDotLoaderProps } from ".";

export default {
  title: "Loaders/ThreeDotLoader",
  component: ThreeDotLoaderComponent,
} as ComponentMeta<typeof ThreeDotLoaderComponent>;

const Template: ComponentStory<typeof ThreeDotLoaderComponent> = (
  args: ThreeDotLoaderProps
) => <ThreeDotLoaderComponent {...args} />;

export const ThreeDotLoader = Template.bind({});
ThreeDotLoader.args = {
  loading: true,
};
