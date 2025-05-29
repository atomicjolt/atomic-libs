import { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from ".";
import { Flex } from "../Flex";

export default {
  title: "Layouts/ScrollArea",
  component: ScrollArea.Root,
} as Meta<typeof ScrollArea.Root>;

type Story = StoryObj<typeof ScrollArea.Root>;

export const Vertical: Story = {
  args: {
    children: [
      <Flex $direction="row" $width="100%" $height="100%">
        <ScrollArea.Viewport style={{ height: 900 }}>
          <PrettyGradient height={4000} width="100%" />
        </ScrollArea.Viewport>

        <ScrollArea.Bar orientation="vertical" size="viewport" />
      </Flex>,
    ],
  },
};

export const Horizontal: Story = {
  args: {
    children: [
      <Flex $direction="column" $width="100%" $height="100%">
        <ScrollArea.Viewport style={{ width: 900, height: 300 }}>
          <PrettyGradient width={4000} height="100%" />
        </ScrollArea.Viewport>

        <ScrollArea.Bar orientation="horizontal" size="viewport" />
      </Flex>,
    ],
  },
};

export const HorizontalAbove: Story = {
  args: {
    children: [
      <Flex $direction="column" $width="100%" $height="100%">
        <ScrollArea.Bar orientation="horizontal" />
        <ScrollArea.Viewport style={{ width: 900, height: 300 }}>
          <PrettyGradient width={4000} height="100%" />
        </ScrollArea.Viewport>
      </Flex>,
    ],
  },
};

function PrettyGradient(props: {
  height?: number | string;
  width?: number | string;
}) {
  const { height, width } = props;

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(135deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",
        width,
        height,
        position: "relative",
      }}
    />
  );
}
