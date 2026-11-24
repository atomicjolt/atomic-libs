import { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from ".";
import {
  ColorArgTypes,
  DimensionsArgTypes,
  MarginArgTypes,
  RenderPropsArgTypes,
  TypographyArgTypes,
} from "@sb/helpers";

export default {
  title: "Typography/Heading",
  component: Heading,
  parameters: {
    primaryStyleProps: [
      "$size",
      "$weight",
      "$color",
      "$align",
      "$lineHeight",
      "$letterSpacing",
      "$wrap",
      "$truncate",
      "$clamp",
      "$decoration",
      "$transform",
    ],
  },
  argTypes: {
    ...RenderPropsArgTypes,
    ...MarginArgTypes,
    ...TypographyArgTypes,
    ...ColorArgTypes,
    ...DimensionsArgTypes,
    $size: {
      ...TypographyArgTypes.$size,
      table: {
        ...TypographyArgTypes.$size?.table,
        defaultValue: { summary: '"6"' },
      },
    },
    $m: {
      ...MarginArgTypes.$m,
      table: {
        ...MarginArgTypes.$m?.table,
        defaultValue: { summary: '"0"' },
      },
    },
    $color: {
      ...ColorArgTypes.$color,
      table: {
        ...ColorArgTypes.$color?.table,
        defaultValue: { summary: '"text-clr"' },
      },
    },
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description:
        "The semantic element to use for the heading. Does not affect styling.",
    },
  },
} as Meta<typeof Heading>;

type Story = StoryObj<typeof Heading>;

export const Primary: Story = {
  args: {
    children: "Heading",
  },
};
