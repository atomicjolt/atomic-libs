import { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import { PressableArgTypes } from "@sb/helpers";
import MaterialIcon from "@components/Icons/MaterialIcon";
import { getCssProps } from "@sb/cssprops";

const meta: Meta<typeof Button> = {
  title: "Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Button"),
  },
  argTypes: {
    ...PressableArgTypes,
    children: {
      control: "text",
    },
    variant: {
      control: "select",
      description: "Button variant controls the presentation of the button.",
      table: {
        category: "Presentation",
      },
      options: [
        "primary",
        "secondary",
        "link",
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
    isLoading: false,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    children: "Secondary",
    variant: "secondary",
  },
};

export const Link: Story = {
  args: {
    ...Primary.args,
    children: "Link",
    variant: "link",
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
    isLoading: true,
    loadingLabel: "Now Loading",
  },
};

export const LoadingCompleteButton: Story = {
  args: {
    ...Primary.args,
    children: "Primary",
    variant: "primary",
    isLoading: true,
    loadingLabel: "Now Loading",
    loadingComplete: true,
  },
};

export const WithIcon: Story = {
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    ...Primary.args,
    children: [<MaterialIcon icon="add" key="add" />, "Primary"],
    variant: "primary",
  },
};
