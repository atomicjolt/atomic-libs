import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WarningBanner as WarningBannerComponent, BannerWrapperProps } from ".";

export default {
  title: "Banners/DismissableBanner/WarningBanner",
  component: WarningBannerComponent,
} as ComponentMeta<typeof WarningBannerComponent>;

const Template: ComponentStory<typeof WarningBannerComponent> = (
  args: BannerWrapperProps
) => <WarningBannerComponent {...args} />;

export const WarningBanner = Template.bind({});
WarningBanner.args = {
  children: "Warning!",
};
