import styled from "styled-components";

export const PopoverWrapper = styled.div`
  position: relative;
`;

PopoverWrapper.displayName = "PopoverWrapper";

export const StyledPopover = styled.div`
  visibility: hidden;
  position: absolute;
  width: var(--popover-width, auto);
  z-index: 100;
  opacity: 0;
  transform: scaleY(0.9);
  transform-origin: top;
  transition: var(--popover-animation);

  &.aje-popover-bottom-left {
    margin-top: var(--popover-distance);
    top: 100%;
    left: 0;
  }

  &.aje-popover-bottom-right {
    margin-top: var(--popover-distance);
    top: 100%;
    right: 0;
  }

  &.aje-popover-top-left {
    margin-bottom: var(--popover-distance);
    bottom: 100%;
    left: 0;
  }

  &.aje-popover-top-right {
    margin-bottom: var(--popover-distance);
    bottom: 100%;
    right: 0;
  }

  &.aje-popover-left {
    margin-right: var(--popover-distance);
    right: 100%;
    top: 0;
  }

  &.aje-popover-right {
    margin-left: var(--popover-distance);
    left: 100%;
    top: 0;
  }

  &.aje-popover-top,
  &.aje-popover-bottom {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

  &.aje-popover-bottom {
    margin: auto;
    margin-top: var(--popover-distance);
    top: 100%;
  }

  &.aje-popover-top {
    bottom: 100%;
    margin-bottom: var(--popover-distance);
  }
  &.is-small {
    --popover-width: 100px;
  }
  &.is-medium {
    --popover-width: 200px;
  }
  &.is-large {
    --popover-width: 300px;
  }
  &.is-full {
    --popover-width: 100%;
  }
  &.is-auto {
    --popover-width: max-content;
  }

  &.is-visible {
    visibility: visible;
    opacity: 1;
    transform: scaleY(1);
  }
`;
