import { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from ".";
import ProgressCircleMeta from "@components/Feedback/ProgressCircle/ProgressCircle.stories";

const meta: Meta<typeof Spinner> = {
  title: "Animations/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...ProgressCircleMeta.argTypes,
    $size: {
      ...ProgressCircleMeta.argTypes?.$size,
      table: {
        ...ProgressCircleMeta.argTypes?.$size?.table,
        defaultValue: { summary: '"40px"' },
      },
    },
    $trackWidth: {
      ...ProgressCircleMeta.argTypes?.$trackWidth,
      table: {
        ...ProgressCircleMeta.argTypes?.$trackWidth?.table,
        defaultValue: { summary: '"6"' },
      },
    },
    $linecap: {
      ...ProgressCircleMeta.argTypes?.$linecap,
      table: {
        ...ProgressCircleMeta.argTypes?.$linecap?.table,
        defaultValue: { summary: '"round"' },
      },
    },
    $trackColor: {
      ...ProgressCircleMeta.argTypes?.$trackColor,
      table: {
        ...ProgressCircleMeta.argTypes?.$trackColor?.table,
        defaultValue: { summary: '"transparent"' },
      },
    },
    $indicatorColor: {
      ...ProgressCircleMeta.argTypes?.$indicatorColor,
      table: {
        ...ProgressCircleMeta.argTypes?.$indicatorColor?.table,
        defaultValue: { summary: '"var(--animation-clr)"' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {};
