import React, { useRef, useState } from "react";
import {
  Button,
  IconMenu,
  Item,
  MaterialIcon,
  Menu,
  MenuTrigger,
  OverlayTrigger,
  Popover,
  Pressable,
  Section,
  ToolTip,
  ToolTipTrigger,
} from "@atomicjolt/atomic-elements";
import { Demo, DemoGrid, DemoPage } from "../components/Demo";

function PopoverContent() {
  return <div className="pg-popover">Hi there</div>;
}

export default function Overlays() {
  const ref = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DemoPage>
      <DemoGrid>
        <Demo title="ToolTip">
          <ToolTipTrigger>
            <Button>Hover or focus me</Button>
            <ToolTip>This is the tooltip content</ToolTip>
          </ToolTipTrigger>
        </Demo>

        <Demo title="IconMenu">
          <IconMenu icon="more_vert" aria-label="More options">
            <Item onAction={() => alert("Item 1")}>Item 1</Item>
            <Item>Item 2</Item>
            <Section title="Section">
              <Item>Item 3</Item>
              <Item>Item 4</Item>
            </Section>
          </IconMenu>
        </Demo>

        <Demo title="MenuTrigger">
          <MenuTrigger>
            <Button>
              Open menu
              <MaterialIcon icon="arrow_drop_down" />
            </Button>
            <Popover placement="bottom left">
              <Menu>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Menu>
            </Popover>
          </MenuTrigger>
        </Demo>

        <Demo title="OverlayTrigger + Popover">
          <OverlayTrigger type="dialog">
            <Button>OverlayTrigger</Button>
            <Popover>
              <PopoverContent />
            </Popover>
          </OverlayTrigger>
        </Demo>

        <Demo title="Custom trigger element" description="A plain button wrapped in Pressable.">
          <OverlayTrigger type="dialog">
            <Pressable>
              <button>Custom element</button>
            </Pressable>
            <Popover>
              <PopoverContent />
            </Popover>
          </OverlayTrigger>
        </Demo>

        <Demo title="Manually managed Popover" description="isOpen and triggerRef controlled by the page.">
          <button ref={ref} onClick={() => setIsOpen(!isOpen)}>
            Toggle popover
          </button>
          <Popover isOpen={isOpen} triggerRef={ref}>
            <PopoverContent />
          </Popover>
        </Demo>
      </DemoGrid>
    </DemoPage>
  );
}
