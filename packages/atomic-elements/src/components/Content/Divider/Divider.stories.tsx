import { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from ".";
import { divider } from "@styles/theme/component";

export default {
  title: "Content/Divider",
  component: Divider,
  parameters: {
    cssprops: { divider },
  },
  argTypes: {
    spacing: {
      control: "number",
    },
    as: {
      control: false,
    },
  },
  decorators: [
    (Story, { args }) => (
      <div
        style={{ display: args.orientation === "vertical" ? "flex" : "block" }}
      >
        <p>Here is some content</p>
        <Story />
        <p>Here is some below content</p>
      </div>
    ),
  ],
} as Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
};
