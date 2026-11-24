import { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from ".";
import { link } from "@styles/theme/component";
import {
  ColorArgTypes,
  MarginArgTypes,
  RenderPropsArgTypes,
  TypographyArgTypes,
} from "@sb/helpers";

export default {
  title: "Typography/Link",
  component: Link,
  parameters: {
    layout: "centered",
    cssprops: { link },
  },
  argTypes: {
    ...MarginArgTypes,
    ...RenderPropsArgTypes,
    ...TypographyArgTypes,
    ...ColorArgTypes,
    as: {
      control: "select",
      options: ["a", "span"],
    },
    target: {
      control: "select",
      options: ["_blank", "_self", "_parent", "_top"],
    },
  },
} as Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: "Link",
    href: "https://atomicjolt.com",
    target: "_blank",
    $size: "4",
  },
};
