import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button, { Props } from ".";

export default {
  title: "Inputs/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: Props) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  className: "primary",
  type: "button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  className: "secondary",
  type: "button",
};
