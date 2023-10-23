import { Meta, StoryObj } from "@storybook/react";
import Button from ".";
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
      options: [
        "primary",
        "secondary",
        "error",
        "success",
        "inverted",
        "content",
      ],
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: Doc,
    },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
    type: "button",
    disabled: false,
    loading: false,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    children: "Secondary",
    variant: "secondary",
  },
};

export const Error: Story = {
  args: {
    ...Primary.args,
    children: "Error",
    variant: "error",
  },
};

export const Success: Story = {
  args: {
    ...Primary.args,
    children: "Success",
    variant: "success",
  },
};

export const Inverted: Story = {
  args: {
    ...Primary.args,
    children: "Inverted",
    variant: "inverted",
  },
};
export const LoadingButton: Story = {
  args: {
    ...Primary.args,
    children: "Primary",
    variant: "primary",
    loading: true,
    loadingLabel: "Now Loading",
  },
};

export const LoadingCompleteButton: Story = {
  args: {
    ...Primary.args,
    children: "Primary",
    variant: "primary",
    loading: true,
    loadingLabel: "Now Loading",
    loadingComplete: true,
  },
};
