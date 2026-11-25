import { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from ".";
import {
  ColorArgTypes,
  DimensionsArgTypes,
  MarginArgTypes,
  RenderPropsArgTypes,
  TypographyArgTypes,
} from "@sb/helpers";
import { Link } from "../Link";
import { View } from "../../Layout/View";

export default {
  title: "Typography/Text",
  component: Text,
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
    ...MarginArgTypes,
    ...RenderPropsArgTypes,
    ...TypographyArgTypes,
    ...ColorArgTypes,
    ...DimensionsArgTypes,
    $color: {
      ...ColorArgTypes.$color,
      table: {
        ...ColorArgTypes.$color?.table,
        defaultValue: { summary: '"text-clr"' },
      },
    },
    $align: {
      ...TypographyArgTypes.$align,
      description: "Horizontal text alignment.",
    },
    as: {
      control: "select",
      options: ["div", "span", "p", "label"],
    },
  },
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    as: "div",
    $size: "3",
    children: "The quick brown fox jumps over the lazy dog",
  },
};

export const WithLink: Story = {
  args: {
    as: "p",
    $size: "3",
    children: [
      "The quick brown fox jumps over the ",
      <Link target="_blank" href="https://example.com">
        lazy dog
      </Link>,
    ],
  },
};

export const Truncated: Story = {
  render: (args) => {
    return (
      <View $maxWidth="250px">
        <Text {...args}>The quick brown fox jumps over the lazy dog</Text>
      </View>
    );
  },
  args: {
    ...Primary.args,
    $truncate: true,
  },
};

export const Clamped: Story = {
  args: {
    ...Primary.args,
    children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium distinctio eius nesciunt eveniet sint ad dicta suscipit, quod ipsum facere laboriosam adipisci excepturi quia deserunt, aperiam maxime neque dignissimos atque!`,
    $clamp: "2",
    $maxWidth: "250px",
  },
};
