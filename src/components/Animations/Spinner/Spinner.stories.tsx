import { Meta, StoryObj } from "@storybook/react";
import { getCssProps } from "@sb/cssprops";
import { AriaLabelArgTypes, RenderPropsArgTypes } from "@sb/helpers";
import { Spinner } from ".";

const meta: Meta<typeof Spinner> = {
  title: "Animations/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Loader"),
  },
  argTypes: {
    ...AriaLabelArgTypes,
    ...RenderPropsArgTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {};
