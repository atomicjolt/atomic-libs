import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ErrorBanner, BannerWrapperProps } from ".";

export default {
  title: "Banners/DismissableBanner/ErrorBanner",
  component: ErrorBanner,
} as ComponentMeta<typeof ErrorBanner>;

const Template: ComponentStory<typeof ErrorBanner> = (
  args: BannerWrapperProps
) => <ErrorBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Error!",
};

// Additional stories go here
