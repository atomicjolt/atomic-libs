import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UpgradeBanner, UpgradeBannerProps } from ".";

export default {
  title: "Banners/ActionBanner/UpgradeBanner",
  component: UpgradeBanner,
} as ComponentMeta<typeof UpgradeBanner>;

const Template: ComponentStory<typeof UpgradeBanner> = (
  args: UpgradeBannerProps
) => <UpgradeBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  time: "30 Days",
  app: "Atomic Assessments",
};
