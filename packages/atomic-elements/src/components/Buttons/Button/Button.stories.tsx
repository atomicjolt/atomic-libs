import { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from ".";
import {
  AriaLabelArgTypes,
  LoadingArgTypes,
  PressableArgTypes,
  RenderPropsArgTypes,
} from "@sb/helpers";
import { MaterialIcon } from "@components/Icons/MaterialIcon";
import { Flex } from "@components/Layout/Flex";
import { button } from "@styles/theme/component";

const meta: Meta<typeof Button> = {
  title: "Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
    cssprops: { button },
  },
  // Button gets no docgen (see docs/storybook-audit.md, G9), so every prop
  // the table should show needs an explicit argType here.
  argTypes: {
    ...PressableArgTypes,
    ...RenderPropsArgTypes,
    ...AriaLabelArgTypes,
    children: {
      ...RenderPropsArgTypes.children,
      control: "text",
      description:
        "Content of the button. Can also be a function that receives the button's render state.",
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
      table: {
        defaultValue: { summary: '"primary"' },
      },
    },
    size: {
      control: "select",
      options: ["small", "medium", "large", "full", "auto"],
      description:
        "Width of the button. `auto` fits the content and `full` fills the container.",
      table: {
        defaultValue: { summary: '"auto"' },
      },
    },
    as: {
      control: "select",
      options: ["button", "a"],
      description: "The element to render the button as.",
      table: {
        defaultValue: { summary: '"a" when `href` is set, otherwise "button"' },
      },
    },
    href: {
      control: "text",
      description:
        "URL to link to. When set, the button renders as an `<a>` element.",
    },
    slot: {
      control: "text",
      description:
        "Slot name, used to pick up props from a parent component (for example `previous-month` inside a Calendar).",
    },
    isDisabled: {
      control: "boolean",
      description: "If true, the button will not be clickable.",
      table: {
        category: "State",
      },
    },
    isLoading: {
      ...LoadingArgTypes.isLoading,
      description:
        "Shows a loading spinner in place of the content. The button stays pressable.",
      table: {
        ...LoadingArgTypes.isLoading?.table,
        defaultValue: { summary: "false" },
      },
    },
    loadingLabel: {
      ...LoadingArgTypes.loadingLabel,
      description:
        "Label announced to screen readers while loading. Replaces the button's `aria-label` while `isLoading` is true.",
    },
    loadingComplete: {
      control: "boolean",
      description:
        "Transitions the loading spinner to a checkmark. Use with `isLoading`.",
      table: {
        category: "State",
        defaultValue: { summary: "false" },
      },
    },
    type: {
      control: "select",
      description: "The type of button.",
      options: ["button", "submit", "reset"],
      table: {
        defaultValue: { summary: '"button"' },
      },
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

export const Content: Story = {
  args: {
    ...Primary.args,
    children: "Content",
    variant: "content",
  },
};

export const Border: Story = {
  args: {
    ...Primary.args,
    children: "Border",
    variant: "border",
  },
};

export const Ghost: Story = {
  args: {
    ...Primary.args,
    children: "Ghost",
    variant: "ghost",
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    children: "Disabled",
    isDisabled: true,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <Flex $gap="8px" $align="center">
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="medium">
        Medium
      </Button>
      <Button {...args} size="large">
        Large
      </Button>
    </Flex>
  ),
  args: {
    ...Primary.args,
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    children: "Primary",
    variant: "primary",
    isLoading: true,
    loadingLabel: "Now Loading",
  },
};

export const LoadingComplete: Story = {
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
