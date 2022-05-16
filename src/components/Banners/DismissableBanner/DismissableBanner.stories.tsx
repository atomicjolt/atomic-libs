import { ComponentMeta, ComponentStory } from "@storybook/react";
import DismissableBanner, { Props } from ".";

export default {
  title: "Banners/DismissableBanner",
  component: DismissableBanner,
} as ComponentMeta<typeof DismissableBanner>;

const Template: ComponentStory<typeof DismissableBanner> = (args: Props) => (
  <DismissableBanner {...args} />
);

export const ErrorBanner = Template.bind({});
ErrorBanner.args = {
  children: "Error text",
  type: "error",
  icon: "error",
};

export const WarningBanner = Template.bind({});
WarningBanner.args = {
  children: "Warning Text",
  type: "warning",
  icon: "warning",
};

// Additional stories go here
