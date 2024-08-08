import { Meta, StoryObj } from "@storybook/react";
import { getCssProps } from "@sb/cssprops";
import { AriaLabelArgTypes, RenderPropsArgTypes } from "@sb/helpers";
import { Spinner } from ".";

const meta: Meta<typeof Spinner> = {
  title: "Animations/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Animations"),
  },
  argTypes: {
    ...AriaLabelArgTypes,
    ...RenderPropsArgTypes,
  },
  decorators: [
    (Story) => (
      <div style={{ fontSize: "16px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {};
