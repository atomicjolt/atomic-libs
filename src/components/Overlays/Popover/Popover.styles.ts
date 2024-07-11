import styled from "styled-components";

export const PopoverUnderlay = styled.div`
  position: fixed;
  inset: 0;
`;

export const PopoverContent = styled.div`
  min-height: var(--popover-min-height, 80px);
  box-shadow: var(--popover-box-shadow, none);
  border-radius: var(--popover-radius, 0px);
  overflow-y: auto;
  overflow-x: hidden;

  &.aje-popover--listbox {
    --popover-min-height: calc(var(--listbox-item-height) * 2);
    --popover-box-shadow: var(--listbox-box-shadow);
    --popover-radius: var(--listbox-border-radius);
  }

  &.aje-popover--menu {
    --popover-min-height: calc(var(--menu-item-height) * 2);
    --popover-box-shadow: var(--menu-box-shadow);
    --popover-radius: var(--menu-border-radius);
  }
`;
