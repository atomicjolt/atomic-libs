import { Meta, StoryObj } from "@storybook/react";
import { FormatOptional } from ".";

export default {
  title: "Format/FormatOptional",
  component: FormatOptional,
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
} as Meta<typeof FormatOptional>;

type Story = StoryObj<typeof FormatOptional>;

export const Primary: Story = {
  args: {
    value: "Hello World",
  },
};

export const Fallback: Story = {
  args: {
    value: null,
    fallback: "No value",
  },
};

export const CustomizeRender: Story = {
  args: {
    value: "Hello World",
    children: (v: any) => <strong>{v}</strong>,
  },
  parameters: {
    docs: {
      source: {
        code: `
<FormatOptional value="Hello World">
  {(value) => (v) => <strong>{v}</strong>}
</FormatOptional>
`,
      },
    },
  },
};
