import { scale } from "@styles/animations";
import styled from "styled-components";

export const PopoverUnderlay = styled.div`
  position: fixed;
  inset: 0;
`;

export const PopoverContent = styled.div<{
  $transformOrigin: React.CSSProperties["transformOrigin"];
}>`
  min-height: var(--popover-min-height, 80px);
  box-shadow: var(--popover-box-shadow, none);
  border-radius: var(--popover-radius, 0px);
  border: var(--popover-border, none);
  overflow-y: auto;
  overflow-x: hidden;

  transform-origin: ${({ $transformOrigin }) => $transformOrigin || "top"};
  animation: ${scale} 0.2s ease-in-out;

  &.aje-popover--listbox {
    --popover-min-height: var(--listbox-item-height);
    --popover-box-shadow: var(--listbox-box-shadow);
    --popover-radius: var(--listbox-border-radius);
  }

  &.aje-popover--menu {
    --popover-min-height: var(--menu-item-height);
    --popover-box-shadow: var(--menu-box-shadow);
    --popover-radius: var(--menu-border-radius);
  }

  &.aje-popover--datepicker {
    --popover-min-height: auto;
    --popover-box-shadow: var(--shadow-md);
    --popover-radius: 5px;
    --popover-border: 1px solid var(--border-clr);
  }
`;
