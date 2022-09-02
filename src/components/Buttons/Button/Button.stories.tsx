import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button, { Props } from ".";

export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: {
    onClick: {
      control: false,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: Props) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  className: "primary",
  type: "button",
  disabled: false,
  loading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  children: "Secondary",
  className: "secondary",
};

export const Error = Template.bind({});
Error.args = {
  ...Primary.args,
  children: "Error",
  className: "error",
};

export const Success = Template.bind({});
Success.args = {
  ...Primary.args,
  children: "Success",
  className: "success",
};

export const Inverted = Template.bind({});
Inverted.args = {
  ...Primary.args,
  children: "Inverted",
  className: "inverted",
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  ...Primary.args,
  children: "Primary",
  className: "primary",
  loading: true,
  loadingLabel: "Now Loading",
};

export const LoadingCompleteButton = Template.bind({});
LoadingCompleteButton.args = {
  ...Primary.args,
  children: "Primary",
  className: "primary",
  loading: true,
  loadingLabel: "Now Loading",
  loadingComplete: true,
};
