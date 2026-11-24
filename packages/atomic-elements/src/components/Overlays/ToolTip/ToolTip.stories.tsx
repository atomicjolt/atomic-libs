import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import {
  ToolTip,
  ToolTipProps,
  ToolTipTarget,
  ToolTipTrigger,
  ToolTipTriggerProps,
} from ".";
import { Button } from "../../Buttons/Button";
import { TextInput } from "../../Inputs/TextInput";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { tooltip } from "@styles/theme/component";

// `target` is a story-only arg: the element rendered as the tooltip's target.
type ToolTipStoryArgs = ToolTipProps &
  ToolTipTriggerProps & { target: React.ReactElement<any> };

const meta: Meta<ToolTipStoryArgs> = {
  title: "Overlays/ToolTip",
  component: ToolTip,
  subcomponents: { ToolTipTrigger, ToolTipTarget },
  tags: ["!autodocs"],
  parameters: {
    layout: "centered",
    cssprops: { tooltip },
  },
  argTypes: {
    target: {
      table: {
        disable: true,
      },
    },
    triggerRef: {
      table: {
        disable: true,
      },
    },
    trigger: {
      description:
        "By default, open for both focus and hover. Can be set to only open on focus. Set on `ToolTipTrigger`.",
      control: "select",
      options: ["focus", null],
    },
    delay: {
      control: "number",
      description:
        "Delay in milliseconds before the tooltip appears. Set on `ToolTipTrigger`.",
      table: { defaultValue: { summary: "0" } },
    },
    closeDelay: {
      control: "number",
      description:
        "Delay in milliseconds before the tooltip disappears. Set on `ToolTipTrigger`.",
      table: { defaultValue: { summary: "0" } },
    },
    defaultOpen: {
      control: "boolean",
      description:
        "Whether the tooltip should be open by default. Set on `ToolTipTrigger`.",
    },
    isDisabled: {
      control: "boolean",
      description:
        "Whether the tooltip should be disabled. Set on `ToolTipTrigger`.",
    },
    isOpen: {
      control: "boolean",
      description:
        "Control the open state of the tooltip manually. Set on `ToolTipTrigger`.",
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Callback for when the tooltip open state changes. Set on `ToolTipTrigger`.",
      table: {
        category: "Events",
      },
    },
    offset: {
      control: "number",
      description: "The offset of the tooltip from the trigger",
      table: { defaultValue: { summary: "2" } },
    },
  },
};

export default meta;

type Story = StoryObj<ToolTipStoryArgs>;

export const Primary: Story = {
  render: (args) => {
    const {
      isOpen,
      defaultOpen,
      delay,
      closeDelay,
      onOpenChange,
      isDisabled,
      trigger,
      target,
      ...rest
    } = args;

    return (
      <ToolTipTrigger
        isOpen={isOpen}
        defaultOpen={defaultOpen}
        delay={delay}
        closeDelay={closeDelay}
        isDisabled={isDisabled}
        trigger={trigger}
        onOpenChange={onOpenChange}
      >
        {target}
        <ToolTip {...rest} />
      </ToolTipTrigger>
    );
  },
  args: {
    target: <Button>Hover Me</Button>,
    // @ts-ignore
    children: "This is the tooltip content",
  },
};

export const DefaultOpen: Story = {
  render: Primary.render,
  args: {
    ...Primary.args,
    defaultOpen: true,
  },
};

export const InputTarget: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    target: <TextInput label="Label" />,
    placement: "bottom",
  },
};

export const WithCustomTarget: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    target: (
      <ToolTipTarget>
        <h1>Hover Me</h1>
      </ToolTipTarget>
    ),
  },
};

export const IconWithTooltip: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    target: (
      <MaterialIcon icon="info" size="large" variant="outlined" isFocusable />
    ),
  },
};
