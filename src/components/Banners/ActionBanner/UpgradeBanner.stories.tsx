import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UpgradeBanner as UpgradeBannerComponent, UpgradeBannerProps } from ".";

export default {
  title: "Banners/ActionBanner/UpgradeBanner",
  component: UpgradeBannerComponent,
  argTypes: {
    children: {
      control: "text",
    },
  },
} as ComponentMeta<typeof UpgradeBannerComponent>;

const Template: ComponentStory<typeof UpgradeBannerComponent> = (
  args: UpgradeBannerProps
) => <UpgradeBannerComponent {...args} />;

export const UpgradeBanner = Template.bind({});
UpgradeBanner.args = {
  time: "30 Days",
  app: "Atomic Assessments",
};
