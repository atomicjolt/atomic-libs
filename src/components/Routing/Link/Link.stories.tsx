import { Meta, StoryObj } from "@storybook/react";
import { Link } from ".";
import { getCssProps } from "@sb/cssprops";

export default {
  title: "Routing/Link",
  component: Link,
  parameters: {
    layout: "centered",
    cssProps: getCssProps("Link"),
  },
  decorators: [
    (Story) => (
      <div style={{ fontSize: "2rem" }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: "Link",
    href: "https://atomicjolt.com",
    target: "_blank",
  },
};
