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
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    isDisabled: false,
    icon: "more_vert",
    "aria-label": "More options",
    isLoading: false,
    iconVariant: "default",
    variant: "border",
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
