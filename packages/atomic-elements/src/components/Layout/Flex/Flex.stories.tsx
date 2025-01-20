import { Meta, StoryObj } from "@storybook/react";
import { Flex } from ".";
import { View } from "@components/Layout/View";
import {
  DecorativeBox,
  LayoutArgTypes,
  RenderPropsArgTypes,
} from "@sb/helpers";
import { SpacingSteps } from "@styles/spacing";

export default {
  title: "Layouts/Flex",
  component: Flex,
  argTypes: {
    ...RenderPropsArgTypes,
    ...LayoutArgTypes,
    $display: {
      control: "select",
      options: ["flex", "inline-flex", "none"],
    },
    $direction: {
      control: "select",
      options: ["row", "column", "row-reverse", "column-reverse"],
    },
    $wrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
    },
    $justify: {
      control: "select",
      options: [
        "start",
        "end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    $align: {
      control: "select",
      options: ["stretch", "start", "end", "center", "baseline"],
    },
    $gap: {
      control: "select",
      options: SpacingSteps,
    },
    $gapX: {
      control: "select",
      options: SpacingSteps,
    },
    $gapY: {
      control: "select",
      options: SpacingSteps,
    },
  },
} as Meta<typeof Flex>;

type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
  args: {
    $direction: "row",
    $gap: "3",
    children: [
      <View key="1" $height="64px" $width="64px">
        <DecorativeBox />
      </View>,
      <View key="2" $height="64px" $width="64px">
        <DecorativeBox />
      </View>,
      <View key="3" $flexBasis="64px" $height="64px">
        <DecorativeBox />
      </View>,
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
      <View key="1" $flexBasis="64px" $height="64px">
        <DecorativeBox />
      </View>,
      <View key="2" $flexBasis="64px" $height="64px">
        <DecorativeBox />
      </View>,
      <View key="3" $flexBasis="64px" $height="64px">
        <DecorativeBox />
      </View>,
      <View key="4" $flexBasis="64px" $height="64px">
        <DecorativeBox />
      </View>,
      <View key="5" $flexBasis="64px" $height="64px">
        <DecorativeBox />
      </View>,
      <View key="6" $flexBasis="64px" $height="64px">
        <DecorativeBox />
      </View>,
      <View key="7" $flexBasis="64px" $height="64px">
        <DecorativeBox />
      </View>,
      <View key="8" $flexBasis="64px" $height="64px">
        <DecorativeBox />
      </View>,
      <View key="9" $flexBasis="64px" $height="64px">
        <DecorativeBox />
      </View>,
      <View key="10" $flexBasis="64px" $height="64px">
        <DecorativeBox />
      </View>,
      <View key="11" $flexBasis="64px" $height="64px">
        <DecorativeBox />
      </View>,
      <View key="12" $flexBasis="64px" $height="64px">
        <DecorativeBox />
      </View>,
    ],
  },
};
