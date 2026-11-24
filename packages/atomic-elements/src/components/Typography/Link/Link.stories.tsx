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
    $decoration: {
      ...TypographyArgTypes.$decoration,
      table: {
        ...TypographyArgTypes.$decoration?.table,
        defaultValue: { summary: '"var(--link-text-decoration)"' },
      },
    },
    $color: {
      ...ColorArgTypes.$color,
      table: {
        ...ColorArgTypes.$color?.table,
        defaultValue: { summary: '"var(--link-text-clr)"' },
      },
    },
    as: {
      control: "select",
      options: ["a", "span"],
    },
    href: {
      control: "text",
      description: "URL the link points to.",
    },
    target: {
      control: "select",
      options: ["_blank", "_self", "_parent", "_top"],
      description:
        "Where to open the linked URL, e.g. `_blank` for a new tab or window.",
    },
    isDisabled: {
      control: "boolean",
      description:
        "Whether the link is disabled. A disabled link can't be pressed and is marked `aria-disabled`.",
      table: { category: "State" },
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
