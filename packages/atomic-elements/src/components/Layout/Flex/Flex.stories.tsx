import { Meta, StoryObj } from "@storybook/react";
import { Flex } from ".";
import { View } from "@components/Layout/View";
import { FlexArgTypes, LayoutArgTypes, RenderPropsArgTypes } from "@sb/helpers";

export default {
  title: "Layouts/Flex",
  component: Flex,
  argTypes: {
    ...RenderPropsArgTypes,
    ...LayoutArgTypes,
    ...FlexArgTypes,
  },
} as Meta<typeof Flex>;

type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
  args: {
    $direction: "row",
    $gap: "3",
    $height: "64px",
    children: [
      <View key="1" $width="64px" $bg="accent-clr" />,
      <View key="2" $width="64px" $bg="accent-clr" />,
      <View key="3" $width="64px" $bg="accent-clr" />,
    ],
  },
};

export const FlexWrap: Story = {
  args: {
    $direction: "row",
    $gap: "16px",
    $wrap: "wrap",
    $maxWidth: "250px",
    children: [
      <View key="1" $flexBasis="64px" $height="64px" $bg="accent-clr" />,
      <View key="2" $flexBasis="64px" $height="64px" $bg="accent-clr" />,
      <View key="3" $flexBasis="64px" $height="64px" $bg="accent-clr" />,
      <View key="4" $flexBasis="64px" $height="64px" $bg="accent-clr" />,
      <View key="5" $flexBasis="64px" $height="64px" $bg="accent-clr" />,
      <View key="6" $flexBasis="64px" $height="64px" $bg="accent-clr" />,
      <View key="7" $flexBasis="64px" $height="64px" $bg="accent-clr" />,
      <View key="8" $flexBasis="64px" $height="64px" $bg="accent-clr" />,
      <View key="9" $flexBasis="64px" $height="64px" $bg="accent-clr" />,
      <View key="10" $flexBasis="64px" $height="64px" $bg="accent-clr" />,
      <View key="11" $flexBasis="64px" $height="64px" $bg="accent-clr" />,
      <View key="12" $flexBasis="64px" $height="64px" $bg="accent-clr" />,
    ],
  },
};
