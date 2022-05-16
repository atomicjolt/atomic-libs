import { ComponentMeta, ComponentStory } from "@storybook/react";
import UpgradeBanner, { Props } from ".";

export default {
  title: "Banners/UpgradeBanner",
  component: UpgradeBanner,
} as ComponentMeta<typeof UpgradeBanner>;

const Template: ComponentStory<typeof UpgradeBanner> = (args: Props) => (
  <UpgradeBanner {...args} />
);

export const Default = Template.bind({});
Default.args = {
  time: "30 days",
  app: "Search",
};

// Additional stories go here
