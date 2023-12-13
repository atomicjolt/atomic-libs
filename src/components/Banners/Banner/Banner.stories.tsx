import { Meta, StoryObj } from "@storybook/react";
import Banner from ".";

export default {
  title: "Banners/Banner",
  component: Banner,
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "error", "success", "warning"],
    },
    beforeContent: {
      control: "text",
    },
    afterContent: {
      control: "text",
    },
  },
} as Meta<typeof Banner>;

type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  args: {
    children: "Content of the banner goes here",
    beforeContent: "",
    afterContent: "",
    className: "",
  },
};
