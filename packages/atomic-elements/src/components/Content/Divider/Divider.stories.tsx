import { Meta, StoryObj } from "@storybook/react";
import { Divider } from ".";
import { getCssProps } from "@sb/cssprops";

export default {
  title: "Content/Divider",
  component: Divider,
  parameters: {
    cssprops: getCssProps("Divider"),
  },
  argTypes: {
    spacing: {
      control: "number",
    },
    as: {
      control: false,
    },
  },
} as Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: (args) => (
    <div
      style={{ display: args.orientation === "vertical" ? "flex" : "block" }}
    >
      <p>Here is some content</p>
      <Divider {...args} />
      <p>Here is some below content</p>
    </div>
  ),
  args: {},
};
