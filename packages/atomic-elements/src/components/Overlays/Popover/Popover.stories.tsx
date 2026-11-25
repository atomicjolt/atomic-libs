import { useRef } from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { PlacementArgType } from "@sb/helpers";
import { MenuTrigger } from "../../Dropdowns/Menu/MenuTrigger";
import { Popover } from ".";
import { Menu } from "../../Dropdowns/Menu";
import { Button } from "../../Buttons/Button";
import { Item } from "@components/Collection";

export default {
  title: "Overlays/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    offset: {
      control: "number",
      description:
        "The distance in pixels between the popover and the target element.",
      table: { defaultValue: { summary: "8" } },
    },
    variant: {
      control: "select",
      options: ["listbox", "menu", "datepicker"],
    },
    isOpen: {
      control: "boolean",
      description:
        "Whether the popover is open or not. Not needed when paired with a Trigger Wrapper. Ignored inside a trigger wrapper, which controls the state itself (see the Standalone story).",
    },
    defaultOpen: {
      control: "boolean",
      description:
        "Whether the popover is open by default. Not needed when paired with a Trigger Wrapper. Ignored inside a trigger wrapper, which controls the state itself.",
      table: { defaultValue: { summary: "false" } },
    },
    placement: {
      ...PlacementArgType.placement,
      table: { defaultValue: { summary: '"bottom"' } },
    },
  },
} as Meta<typeof Popover>;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: (args) => {
    return (
      <MenuTrigger>
        <Button>Press Me</Button>
        <Popover {...args}>
          <Menu>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Menu>
        </Popover>
      </MenuTrigger>
    );
  },
  args: {},
};

/** Without a trigger wrapper, pass a `triggerRef` to position the popover and
 * control it with `isOpen` / `onOpenChange`. */
export const Standalone: Story = {
  render: function StandalonePopover(args) {
    const triggerRef = useRef<HTMLButtonElement>(null);
    return (
      <>
        <Button ref={triggerRef}>Trigger</Button>
        <Popover {...args} triggerRef={triggerRef}>
          <div style={{ padding: "8px 12px" }}>Popover content</div>
        </Popover>
      </>
    );
  },
  args: {
    isOpen: true,
  },
  parameters: {
    docs: {
      // An open popover is modal (it locks scrolling), so keep it in an iframe.
      story: { inline: false, height: "200px" },
      source: {
        language: "jsx",
        code: `
const triggerRef = useRef(null);

<Button ref={triggerRef}>Trigger</Button>
<Popover triggerRef={triggerRef} isOpen={isOpen} onOpenChange={setIsOpen}>
  <div style={{ padding: "8px 12px" }}>Popover content</div>
</Popover>
        `,
      },
    },
  },
};
