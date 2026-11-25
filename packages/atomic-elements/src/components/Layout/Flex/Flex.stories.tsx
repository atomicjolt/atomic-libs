import { Meta, StoryObj } from "@storybook/react-vite";
import { Flex } from ".";
import { View } from "@components/Layout/View";
import { FlexArgTypes, LayoutArgTypes, RenderPropsArgTypes } from "@sb/helpers";

export default {
  title: "Layouts/Flex",
  component: Flex,
  parameters: {
    primaryStyleProps: [
      "$direction",
      "$gap",
      "$gapX",
      "$gapY",
      "$align",
      "$justify",
      "$wrap",
      "$display",
    ],
  },
  argTypes: {
    ...RenderPropsArgTypes,
    ...LayoutArgTypes,
    ...FlexArgTypes,
    $display: {
      ...FlexArgTypes.$display,
      description: "CSS display value of the container.",
      table: {
        ...FlexArgTypes.$display?.table,
        defaultValue: { summary: '"flex"' },
      },
    },
    $direction: {
      ...FlexArgTypes.$direction,
      description: "Main axis direction (flex-direction).",
    },
    $wrap: {
      ...FlexArgTypes.$wrap,
      description: "Whether children wrap onto new lines (flex-wrap).",
    },
    $justify: {
      ...FlexArgTypes.$justify,
      description: "Main-axis alignment of the children (justify-content).",
    },
    $align: {
      ...FlexArgTypes.$align,
      description: "Cross-axis alignment of the children (align-items).",
    },
    $gap: {
      ...FlexArgTypes.$gap,
      description: "Gap between children. A spacing step or a CSS length.",
    },
    $gapX: {
      ...FlexArgTypes.$gapX,
      description:
        "Horizontal gap between children (column-gap). A spacing step or a CSS length.",
    },
    $gapY: {
      ...FlexArgTypes.$gapY,
      description:
        "Vertical gap between children (row-gap). A spacing step or a CSS length.",
    },
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
