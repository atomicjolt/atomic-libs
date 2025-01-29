import { Meta, StoryObj } from "@storybook/react";
import { ActionBanner } from ".";
import { getCssProps } from "@sb/cssprops";
import { RenderPropsArgTypes } from "@sb/helpers";

export default {
  title: "Banners/ActionBanner",
  component: ActionBanner,
  parameters: {
    cssprops: getCssProps("Banner"),
  },
  argTypes: {
    ...RenderPropsArgTypes,
    onPress: {
      control: false,
      table: {
        category: "Events",
      },
    },
    variant: {
      control: "select",
      options: ["info", "warning", "success", "error"],
    },
    buttonVariant: {
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
} as Meta<typeof ActionBanner>;

type Story = StoryObj<typeof ActionBanner>;

export const Info: Story = {
  args: {
    variant: "info",
    children:
      "Article Posted! Now just wait for the comments to start rolling in",
    icon: "info",
    buttonText: "Go to Post",
    className: "",
  },
};

export const Upgrade: Story = {
  args: {
    variant: "info",
    children:
      "Your trial expires in 30 Days. Upgrade now to re-enable Atomic Assessments",
    icon: "new_releases",
    buttonText: "Upgrade Now",
    className: "",
  },
};
