import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WarningBanner, BannerWrapperProps } from ".";

export default {
  title: "Banners/DismissableBanner/WarningBanner",
  component: WarningBanner,
} as ComponentMeta<typeof WarningBanner>;

const Template: ComponentStory<typeof WarningBanner> = (
  args: BannerWrapperProps
) => <WarningBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Warning!",
};

// Additional stories go here
