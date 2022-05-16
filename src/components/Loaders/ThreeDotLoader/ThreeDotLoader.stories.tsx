import { ComponentMeta, ComponentStory } from "@storybook/react";
import ThreeDotLoader, { Props } from ".";

export default {
  title: "Loaders/ThreeDotLoader",
  component: ThreeDotLoader,
} as ComponentMeta<typeof ThreeDotLoader>;

const Template: ComponentStory<typeof ThreeDotLoader> = (args: Props) => (
  <ThreeDotLoader {...args} />
);

export const Default = Template.bind({});
Default.args = {};

// Additional stories go here
