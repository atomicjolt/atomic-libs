import { Meta, StoryObj } from "@storybook/react";
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
  argTypes: {
    ...MarginArgTypes,
    ...RenderPropsArgTypes,
    ...TypographyArgTypes,
    ...ColorArgTypes,
    ...DimensionsArgTypes,
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
      <Link
        target="_blank"
        href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdogsbestlife.com%2Fwp-content%2Fuploads%2F2022%2F08%2Flazy-dog-breeds-frenchie-scaled.jpeg&f=1&nofb=1&ipt=7ecf8e2e9cb633f95d3d2d92dbfced090b1fa02ea58f4c53fd5a0bf72036b9dd&ipo=images"
      >
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
