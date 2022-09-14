import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ActionBanner, { ActionBannerProps } from ".";

export default {
  title: "Banners/ActionBanner",
  component: ActionBanner,
  argTypes: {
    variant: {
      control: "text",
    },
    children: {
      control: "text",
    },
  },
} as ComponentMeta<typeof ActionBanner>;

const Template: ComponentStory<typeof ActionBanner> = (
  args: ActionBannerProps
) => <ActionBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "upgrade",
  children: "Take Action!",
  icon: "info",
  buttonText: "Press Me",
};

// Additional stories go here
