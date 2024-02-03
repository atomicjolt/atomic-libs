import { Meta, StoryObj } from "@storybook/react";
import IconButton from ".";
import { CallbackControls, FocusEventControls } from "../../storybook";

const meta: Meta<typeof IconButton> = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...CallbackControls,
    ...FocusEventControls,
    isDisabled: {
      control: "boolean",
      description: "If true, the button will be not be clickable.",
    },
    type: {
      control: "select",
      description: "The type of button.",
      options: ["button", "submit", "reset"],
    },
    excludeFromTabOrder: {
      control: "boolean",
      description:
        "If true, the button will be excluded from the tab order and will not be focusable via keyboard navigation.",
    },
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "error",
        "success",
        "inverted",
        "content",
        "ghost",
      ],
    },
    onPress: {
      control: false,
      description:
        "Similar to onClick, but preferred for better accessibility. It is called when the button is pressed.",
      table: {
        category: "Events",
      },
    },
    onPressStart: {
      control: false,
      description:
        "Called when the button is pressed down. This is called before onPress.",
      table: {
        category: "Events",
      },
    },
    onPressEnd: {
      control: false,
      description:
        "Called when the button is released. This is called after onPress.",
      table: {
        category: "Events",
      },
    },
    onPressChange: {
      control: false,
      description: "Called when the pressed state of the button changes.",
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    isDisabled: false,
    icon: "more_vert",
    "aria-label": "More options",
    loading: false,
    iconVariant: "default",
    variant: "primary",
  },
};

export const Loading: Story = {
  args: {
    icon: "more_vert",
    "aria-label": "More options",
    loading: true,
    loadingLabel: "Loading...",
    loadingComplete: false,
  },
};
