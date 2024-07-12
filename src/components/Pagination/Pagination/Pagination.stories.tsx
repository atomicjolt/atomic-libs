import { Meta, StoryObj } from "@storybook/react";
import { Pagination } from ".";
import { fn } from "@storybook/test";

export default {
  title: "Pagination/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    hide: {
      control: "multi-select",
      options: ["first", "prev", "next", "last"],
    },
    onChange: {
      table: {
        category: "Events",
      },
    },
  },
  variant: {
    control: "select",
    options: [
      "primary",
      "secondary",
      "link",
      "error",
      "success",
      "inverted",
      "content",
      "border",
      "ghost",
    ],
  },
} as Meta<typeof Pagination>;

type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
  args: {
    onChange: fn(),
    defaultPage: 2,
    totalPages: 10,
    children: ({ page, totalPages }) => (
      <span>
        Page {page} of {totalPages}
      </span>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `
<Pagination
  totalPages={10}
  defaultPage={2}
>
  {({ page, totalPages }) => (
    <span>
      Page {page} of {totalPages}
    </span>
  )}
</Pagination>
        `,
      },
    },
  },
};
