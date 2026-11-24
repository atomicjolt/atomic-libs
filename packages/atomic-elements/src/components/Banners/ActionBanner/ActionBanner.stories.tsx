import { Meta, StoryObj } from "@storybook/react-vite";
import { ActionBanner } from ".";
import { banner } from "@styles/theme/component";
import { RenderPropsArgTypes } from "@sb/helpers";
import { fn } from "storybook/test";

export default {
  title: "Banners/ActionBanner",
  component: ActionBanner,
  parameters: {
    cssprops: { banner },
  },
  argTypes: {
    ...RenderPropsArgTypes,
    onPress: {
      control: false,
      description: "Called when the action button is pressed",
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
        "link",
        "success",
        "error",
        "inverted",
        "content",
        "border",
        "ghost",
      ],
      table: {
        type: {
          summary:
            '"primary" | "secondary" | "link" | "success" | "error" | "inverted" | "content" | "border" | "ghost"',
        },
      },
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
    onPress: fn(),
  },
};

export const Upgrade: Story = {
  args: {
    variant: "info",
    children:
      "Your trial expires in 30 Days. Upgrade now to re-enable Atomic Assessments",
    icon: "new_releases",
    buttonText: "Upgrade Now",
    onPress: fn(),
  },
};
