import { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from ".";
import buttonMeta from "../Button/Button.stories";
import { button } from "@styles/theme/component";

// IconButtonProps omits children (the icon is the content), so leave
// Button's children argType out.
const { children: _children, ...buttonArgTypes } = buttonMeta.argTypes ?? {};

const meta: Meta<typeof IconButton> = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
    cssprops: { button },
  },
  // IconButton gets no docgen (see docs/storybook-audit.md, G9), so it
  // reuses Button's explicit argTypes and adds its own.
  argTypes: {
    ...buttonArgTypes,
    icon: {
      control: "text",
      description: "Name of the Material Icon to render, e.g. `more_vert`",
    },
    variant: {
      ...buttonMeta.argTypes?.variant,
      table: {
        ...buttonMeta.argTypes?.variant?.table,
        defaultValue: { summary: '"border"' },
      },
    },
    size: {
      ...buttonMeta.argTypes?.size,
      options: ["small", "medium", "large"],
      description: "Size of the button and its icon.",
      table: {
        ...buttonMeta.argTypes?.size?.table,
        defaultValue: { summary: '"medium"' },
      },
    },
    iconVariant: {
      control: "select",
      options: ["default", "outlined", "round", "sharp", "two-tone"],
      description: "The Material Icons set to use",
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

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading...",
  },
};
