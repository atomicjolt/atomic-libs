import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button, { ButtonProps } from ".";
import Doc from "./Button.doc.mdx";

export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: {
    onClick: {
      control: false,
      table: {
        category: "Events",
      },
    },
    children: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "error", "success", "inverted"],
    },
  },
  parameters: {
    docs: {
      page: Doc,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  variant: "primary",
  type: "button",
  disabled: false,
  loading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  children: "Secondary",
  variant: "secondary",
};

export const Error = Template.bind({});
Error.args = {
  ...Primary.args,
  children: "Error",
  variant: "error",
};

export const Success = Template.bind({});
Success.args = {
  ...Primary.args,
  children: "Success",
  variant: "success",
};

export const Inverted = Template.bind({});
Inverted.args = {
  ...Primary.args,
  children: "Inverted",
  variant: "inverted",
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  ...Primary.args,
  children: "Primary",
  variant: "primary",
  loading: true,
  loadingLabel: "Now Loading",
};

export const LoadingCompleteButton = Template.bind({});
LoadingCompleteButton.args = {
  ...Primary.args,
  children: "Primary",
  variant: "primary",
  loading: true,
  loadingLabel: "Now Loading",
  loadingComplete: true,
};
