import { Meta, StoryObj } from "@storybook/react";
import { OverlayTrigger } from ".";
import { Pressable } from "./Pressable";
import { Popover } from "../Popover";
import Button from "../../Buttons/Button";
import { OverlayTriggerArgTypes } from "@sb/helpers";

export default {
  title: "Overlays/OverlayTrigger",
  component: OverlayTrigger,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...OverlayTriggerArgTypes,
    children: {
      control: false,
    },
    type: {
      control: "select",
      description: "The type of overlay you want to create",
      options: ["dialog", "menu", "listbox", "tree", "grid", "composite"],
    },
  },
} as Meta<typeof OverlayTrigger>;

type Story = StoryObj<typeof OverlayTrigger>;

export const Primary: Story = {
  args: {
    children: [
      <Button>Open Popover</Button>,
      <Popover>
        <div
          style={{
            backgroundColor: "var(--background-clr-inverted",
            color: "var(--text-clr-inverted)",
            width: "var(--trigger-width)",
            fontSize: "20px",
          }}
        >
          Hi There
        </div>
      </Popover>,
    ],
  },
};

export const CustomTriggerTarget: Story = {
  args: {
    children: [
      <Pressable>
        <button>Open Popover</button>
      </Pressable>,
      <Popover>
        <div
          style={{
            backgroundColor: "var(--background-clr-inverted",
            color: "var(--text-clr-inverted)",
            width: "var(--trigger-width)",
            fontSize: "20px",
          }}
        >
          Hi There
        </div>
      </Popover>,
    ],
  },
};
