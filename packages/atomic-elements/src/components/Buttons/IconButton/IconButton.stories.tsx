import { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from ".";
import buttonMeta from "../Button/Button.stories";
import { button } from "@styles/theme/component";

const meta: Meta<typeof IconButton> = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
    cssprops: { button },
  },
  argTypes: {
    ...buttonMeta.argTypes,
    variant: {
      ...buttonMeta.argTypes?.variant,
      table: {
        ...buttonMeta.argTypes?.variant?.table,
        defaultValue: { summary: '"border"' },
      },
    },
    size: {
      ...buttonMeta.argTypes?.size,
      table: {
        ...buttonMeta.argTypes?.size?.table,
        defaultValue: { summary: '"medium"' },
      },
    },
    iconVariant: {
      table: {
        defaultValue: { summary: '"default"' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    icon: "more_vert",
    "aria-label": "More options",
  },
};

export const isLoading: Story = {
  args: {
    icon: "more_vert",
    "aria-label": "More options",
    isLoading: true,
    loadingLabel: "Loading...",
    loadingComplete: false,
  },
};
