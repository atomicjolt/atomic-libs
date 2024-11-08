import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { DropZone } from ".";
import { Flex } from "@components/Layout/Flex/Flex";

export default {
  title: "Drag & Drop / DropZone",
  component: DropZone,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <Flex alignItems="center" gap={12}>
        <div
          draggable
          style={{
            backgroundColor: "#333",
            color: "#fff",
            fontSize: "16px",
            borderRadius: "4px",
            padding: "8px",
          }}
        >
          Draggable Element
        </div>
        <Story />
      </Flex>
    ),
  ],
  argTypes: {
    onDrop: { table: { category: "Events" } },
    onDropActivate: { table: { category: "Events" } },
    onDropEnter: { table: { category: "Events" } },
    onDropExit: { table: { category: "Events" } },
    onDropMove: { table: { category: "Events" } },
    children: {
      control: false,
    },
  },
} as Meta<typeof DropZone>;

type Story = StoryObj<typeof DropZone>;

export const Primary: Story = {
  args: {
    onDrop: fn(),
    onDropActivate: fn(),
    onDropEnter: fn(),
    onDropExit: fn(),
    onDropMove: fn(),

    children: (
      <div
        style={{
          width: "200px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px dashed black",
          borderRadius: "4px",
        }}
      >
        Drop object here
      </div>
    ),
  },
};
