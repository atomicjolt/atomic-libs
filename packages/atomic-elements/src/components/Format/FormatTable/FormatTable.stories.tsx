import { Meta, StoryObj } from "@storybook/react-vite";
import { FormatTable } from ".";

export default {
  title: "Format/FormatTable",
  component: FormatTable,
} as Meta<typeof FormatTable>;

type Story = StoryObj<typeof FormatTable>;

export const Primary: Story = {
  args: {
    "aria-label": "People",
    columns: [
      { key: "name", title: "Name" },
      { key: "age", title: "Age" },
    ],
    value: [
      { key: "alice", name: "Alice", age: 25 },
      { key: "bob", name: "Bob", age: 30 },
    ],
  },
};
