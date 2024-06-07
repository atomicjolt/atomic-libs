import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  ToolTip,
  ToolTipProps,
  ToolTipTarget,
  ToolTipTrigger,
  ToolTipTriggerProps,
} from ".";
import Button from "../../Buttons/Button";
import TextInput from "../../Inputs/TextInput";
import MaterialIcon from "../../Icons/MaterialIcon";
import { getCssProps } from "@sb/cssprops";

const meta: Meta<ToolTipProps & ToolTipTriggerProps> = {
  title: "Overlays/ToolTip",
  component: ToolTip,
  tags: ["!autodocs"],
  parameters: {
    layout: "centered",
    cssprops: getCssProps("ToolTip"),
  },
  argTypes: {
    // @ts-ignore
    size: {
      table: {
        disable: true,
      },
    },
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
        "By default, open for both focus and hover. Can be set to only open on focus",
      control: "select",
      options: ["focus", null],
    },
    delay: {
      control: "number",
      description: "Delay in milliseconds before the tooltip appears",
    },
    closeDelay: {
      control: "number",
      description: "Delay in milliseconds before the tooltip disappears",
    },
    defaultOpen: {
      control: "boolean",
      description: "Whether the tooltip should be open by default",
    },
    isDisabled: {
      control: "boolean",
      description: "Whether the tooltip should be disabled",
    },
    isOpen: {
      control: "boolean",
      description: "Control the open state of the tooltip manually",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Callback for when the tooltip open state changes",
      table: {
        category: "Events",
      },
    },
    offset: {
      control: "number",
      description: "The offset of the tooltip from the trigger",
    },
  },
};

export default meta;

type Story = StoryObj<
  ToolTipProps & ToolTipTriggerProps & { target: React.ReactElement }
>;

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
    delay: 0,
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
      <ToolTipTarget>
        <div>
          <MaterialIcon icon="info" size="large" variant="outlined" />
        </div>
      </ToolTipTarget>
    ),
  },
};
