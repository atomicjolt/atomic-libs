import { ComponentMeta, ComponentStory } from "@storybook/react";
import ActionBanner, { Props } from ".";

export default {
  title: "Banners/ActionBanner",
  component: ActionBanner,
} as ComponentMeta<typeof ActionBanner>;

const Template: ComponentStory<typeof ActionBanner> = (args: Props) => (
  <ActionBanner {...args} />
);

export const UpgradeBanner = Template.bind({});
UpgradeBanner.args = {
  className: "upgrade",
  children: "Upgrade now",
  icon: "new_releases",
};

// Additional stories go here
