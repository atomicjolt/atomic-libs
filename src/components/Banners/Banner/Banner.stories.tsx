import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Banner } from ".";
import MaterialIcon from "../../Icons/MaterialIcon";
import { getCssProps } from "@sb/cssprops";

export default {
  title: "Banners/Banner",
  component: Banner,
  parameters: {
    cssprops: getCssProps("Banner"),
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "error", "success", "warning"],
    },
  },
} as Meta<typeof Banner>;

type Story = StoryObj<typeof Banner>;

export const Primary: Story = {
  args: {
    children: "Content of the banner goes here",
  },
};

export const WithIcon: Story = {
  args: {
    children: [
      <MaterialIcon icon="info" />,
      <Banner.Content>This is a banner</Banner.Content>,
    ],
  },
};

export const WithIconButton: Story = {
  args: {
    children: [
      <MaterialIcon icon="info" />,
      <Banner.Content>This is a banner</Banner.Content>,
      <Banner.IconButton icon="close" />,
    ],
  },
};

export const WithButton: Story = {
  args: {
    children: [
      <MaterialIcon icon="info" />,
      <Banner.Content>This is a banner</Banner.Content>,
      <Banner.Button>Click Me</Banner.Button>,
    ],
  },
};
