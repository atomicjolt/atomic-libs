import { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import { CallbackControls, FocusEventControls } from "../../storybook";

const meta: Meta<typeof Button> = {
  title: "Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...CallbackControls,
    ...FocusEventControls,
    children: {
      control: "text",
    },
    variant: {
      control: "select",
      description: "Button variant controls the presentation of the button.",
      options: [
        "primary",
        "secondary",
        "error",
        "success",
        "inverted",
        "content",
        "border",
        "ghost",
      ],
    },
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
    // elementType: {
    //   control: "text",
    //   description:
    //     "The type of element to render. By default, it will render a button element.",
    // },
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

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
    type: "button",
    isDisabled: false,
    loading: false,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    children: "Secondary",
    variant: "secondary",
  },
};

export const Error: Story = {
  args: {
    ...Primary.args,
    children: "Error",
    variant: "error",
  },
};

export const Success: Story = {
  args: {
    ...Primary.args,
    children: "Success",
    variant: "success",
  },
};

export const Inverted: Story = {
  args: {
    ...Primary.args,
    children: "Inverted",
    variant: "inverted",
  },
};
export const LoadingButton: Story = {
  args: {
    ...Primary.args,
    children: "Primary",
    variant: "primary",
    loading: true,
    loadingLabel: "Now Loading",
  },
};

export const LoadingCompleteButton: Story = {
  args: {
    ...Primary.args,
    children: "Primary",
    variant: "primary",
    loading: true,
    loadingLabel: "Now Loading",
    loadingComplete: true,
  },
};
