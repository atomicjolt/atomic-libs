import { ComponentMeta, ComponentStory } from "@storybook/react";
import ActionBanner, { Props } from ".";

export default {
  title: "Banners/ActionBanner",
  component: ActionBanner,
} as ComponentMeta<typeof ActionBanner>;

const Template: ComponentStory<typeof ActionBanner> = (args: Props) => (
  <ActionBanner {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: "upgrade",
  children: "Take Action!",
  icon: "info",
  buttonText: "Press Me",
};

// Additional stories go here
