import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ErrorBanner as ErrorBannerComponent, BannerWrapperProps } from ".";

export default {
  title: "Banners/DismissableBanner/ErrorBanner",
  component: ErrorBannerComponent,
  argTypes: {
    children: {
      control: "text",
    },
  },
} as ComponentMeta<typeof ErrorBannerComponent>;

const Template: ComponentStory<typeof ErrorBannerComponent> = (
  args: BannerWrapperProps
) => <ErrorBannerComponent {...args} />;

export const ErrorBanner = Template.bind({});
ErrorBanner.args = {
  children: "Error!",
};

// Additional stories go here
