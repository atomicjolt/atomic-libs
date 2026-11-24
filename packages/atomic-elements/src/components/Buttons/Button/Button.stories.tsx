import { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from ".";
import { PressableArgTypes, RenderPropsArgTypes } from "@sb/helpers";
import { MaterialIcon } from "@components/Icons/MaterialIcon";
import { button } from "@styles/theme/component";

const meta: Meta<typeof Button> = {
  title: "Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
    cssprops: { button },
  },
  argTypes: {
    ...PressableArgTypes,
    ...RenderPropsArgTypes,
    children: {
      control: "text",
    },
    variant: {
      control: "select",
      description: "Button variant controls the presentation of the button.",
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
      description: "If true, the button will not be clickable.",
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
