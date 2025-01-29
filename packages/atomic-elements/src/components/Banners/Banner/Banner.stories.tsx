import { Meta, StoryObj } from "@storybook/react";
import { Banner } from ".";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { getCssProps } from "@sb/cssprops";
import { RenderPropsArgTypes } from "@sb/helpers";

export default {
  title: "Banners/Banner",
  component: Banner,
  parameters: {
    cssprops: getCssProps("Banner"),
  },
  argTypes: {
    ...RenderPropsArgTypes,
    variant: {
      control: "select",
      options: ["info", "error", "success", "warning"],
    },
  },
} as Meta<typeof Banner>;

type Story = StoryObj<typeof Banner>;

export const Primary: Story = {
  args: {
    variant: "info",
    children: <Banner.Content $ml="2">This is a banner</Banner.Content>,
  },
};

export const WithIcon: Story = {
  args: {
    ...Primary.args,
    children: [
      <MaterialIcon icon="info" />,
      <Banner.Content>This is a banner</Banner.Content>,
    ],
  },
};

export const WithIconButton: Story = {
  args: {
    ...Primary.args,
    children: [
      <MaterialIcon icon="info" />,
      <Banner.Content>This is a banner</Banner.Content>,
      <Banner.IconButton icon="close" />,
    ],
  },
};

export const WithButton: Story = {
  args: {
    ...Primary.args,
    children: [
      <MaterialIcon icon="info" />,
      <Banner.Content>This is a banner</Banner.Content>,
      <Banner.Button>Click Me</Banner.Button>,
    ],
  },
};
