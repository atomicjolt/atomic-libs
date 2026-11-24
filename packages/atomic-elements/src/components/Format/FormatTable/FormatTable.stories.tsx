import { Meta, StoryObj } from "@storybook/react-vite";
import { FormatTable } from ".";
import { AriaLabelArgTypes } from "@sb/helpers";

export default {
  title: "Format/FormatTable",
  component: FormatTable,
  argTypes: {
    ...AriaLabelArgTypes,
    fallback: {
      control: "text",
    },
    // FormatTable doesn't pass aria-details on to the table.
    "aria-details": {
      table: { disable: true },
    },
    // Inherited from FormatterProps, but FormatTable doesn't use it.
    children: {
      table: { disable: true },
    },
  },
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
