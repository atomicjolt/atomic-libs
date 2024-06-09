import { Meta, StoryObj } from "@storybook/react";
import { FormatList } from ".";

export default {
  title: "Format/FormatList",
  component: FormatList,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ fontSize: "2rem", fontFamily: "Arial, sans-serif" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    value: {
      control: "object",
    },
    type: {
      control: "select",
      options: ["conjunction", "disjunction", "unit"],
    },
    localeMatcher: {
      control: "select",
      options: ["lookup", "best fit"],
    },
    style: {
      control: "select",
      options: ["long", "short", "narrow"],
    },
    fallback: {
      control: "text",
    },
  },
} as Meta<typeof FormatList>;

type Story = StoryObj<typeof FormatList>;

export const Primary: Story = {
  args: {
    value: ["Motorcycle", "Bus", "Car"],
    type: "conjunction",
  },
};

export const Fallback: Story = {
  args: {
    value: null,
    fallback: "No items",
  },
};
