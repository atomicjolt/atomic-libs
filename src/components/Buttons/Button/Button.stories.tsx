import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button, { Props } from ".";

export default {
  title: "Buttons/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: Props) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  className: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  className: "secondary",
};

export const Error = Template.bind({});
Error.args = {
  children: "Error",
  className: "error",
};

export const Success = Template.bind({});
Success.args = {
  children: "Success",
  className: "success",
};

export const Icon = Template.bind({});
Icon.args = {
  className: "icon",
  icon: "more_vert",
  ariaLabel: "More options"
};
