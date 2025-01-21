import { Meta, StoryObj } from "@storybook/react";
import { Heading } from ".";
import {
  ColorArgTypes,
  MarginArgTypes,
  RenderPropsArgTypes,
  TypographyArgTypes,
} from "@sb/helpers";

export default {
  title: "Typography/Heading",
  component: Heading,
  argTypes: {
    ...RenderPropsArgTypes,
    ...MarginArgTypes,
    ...TypographyArgTypes,
    ...ColorArgTypes,
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
