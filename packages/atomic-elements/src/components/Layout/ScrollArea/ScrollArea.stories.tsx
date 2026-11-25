import { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea } from ".";
import { Flex } from "../Flex";
import { View } from "../View";
import { scrollArea } from "@styles/theme/component";
import { RenderPropsArgTypes } from "@sb/helpers";

export default {
  title: "Layouts/ScrollArea",
  component: ScrollArea,
  subcomponents: {
    "ScrollArea.Viewport": ScrollArea.Viewport,
    "ScrollArea.Bar": ScrollArea.Bar,
  },
  parameters: {
    cssprops: { scrollArea },
  },
  argTypes: {
    ...RenderPropsArgTypes,
  },
} as Meta<typeof ScrollArea>;

type Story = StoryObj<typeof ScrollArea>;

const gradient =
  "linear-gradient(135deg, #2a7b9b 0%, #57c785 50%, #eddd53 100%)";

export const Vertical: Story = {
  args: {
    children: [
      <Flex
        $direction="row"
        $width="100%"
        $height="100%"
        $gap="1"
        key="vertical"
      >
        <ScrollArea.Viewport style={{ height: 900 }}>
          <View $height="4000px" $width="1000px" $bg={gradient} />
        </ScrollArea.Viewport>

        <ScrollArea.Bar orientation="vertical" />
      </Flex>,
    ],
  },
};

export const Horizontal: Story = {
  args: {
    children: [
      <Flex
        $direction="column"
        $width="100%"
        $height="100%"
        $gap="1"
        key="horizontal"
      >
        <ScrollArea.Viewport style={{ width: 900, height: 300 }}>
          <View $width="4000px" $height="100%" $bg={gradient} />
        </ScrollArea.Viewport>

        <ScrollArea.Bar orientation="horizontal" />
      </Flex>,
    ],
  },
};

export const HorizontalAbove: Story = {
  args: {
    children: [
      <Flex
        $direction="column"
        $width="100%"
        $height="100%"
        $gap="1"
        key="horizontal-above"
      >
        <ScrollArea.Bar orientation="horizontal" />
        <ScrollArea.Viewport style={{ width: 900, height: 300 }}>
          <View $width="4000px" $height="100%" $bg={gradient} />
        </ScrollArea.Viewport>
      </Flex>,
    ],
  },
};

export const AlwaysShowBar: Story = {
  args: {
    children: [
      <Flex
        $direction="column"
        $width="100%"
        $height="100%"
        $gap="1"
        key="always"
      >
        <ScrollArea.Viewport style={{ width: 900, height: 300 }}>
          <View $width="100%" $height="100%" $bg={gradient} />
        </ScrollArea.Viewport>
        <ScrollArea.Bar orientation="horizontal" show="always" />
      </Flex>,
    ],
  },
};

export const ReserveSpace: Story = {
  args: {
    children: [
      <Flex
        $direction="column"
        $width="100%"
        $height="100%"
        $gap="1"
        key="reserve-space"
      >
        <ScrollArea.Viewport style={{ width: 900, height: 300 }}>
          <View $width="100%" $height="100%" $bg={gradient} />
        </ScrollArea.Viewport>
        <ScrollArea.Bar orientation="horizontal" reserveSpace />
      </Flex>,
    ],
  },
};
