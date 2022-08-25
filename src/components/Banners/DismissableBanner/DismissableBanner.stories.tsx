import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DismissableBanner, {
  DismissableBannerProps,
  ErrorBanner as ErrorBannerWrapper,
  WarningBanner as WarningBannerWrapper,
} from ".";

export default {
  title: "Banners/DismissableBanner",
  component: DismissableBanner,
  subcomponents: {
    ErrorBanner: ErrorBannerWrapper,
    WarningBanner: WarningBannerWrapper,
  },
} as ComponentMeta<typeof DismissableBanner>;

const Template: ComponentStory<typeof DismissableBanner> = (
  args: DismissableBannerProps
) => <DismissableBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Informative Text",
  type: "info",
  icon: "info",
  autoDismiss: false,
};
