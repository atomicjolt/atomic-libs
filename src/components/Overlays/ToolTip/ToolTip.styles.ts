import styled from "styled-components";

export const ToolTipArrow = styled.div`
  position: absolute;
  background-color: var(--tooltip-bg-clr);
  border-radius: var(--tooltip-arrow-radius, 2px);
  width: 12px;
  height: 12px;
  rotate: 45deg;
  z-index: 999;
`;

export const ToolTipOverlay = styled.div`
  background-color: var(--tooltip-bg-clr);
  color: var(--tooltip-text-clr);
  border-radius: var(--tooltip-radius, 5px);
  padding: var(--tooltip-padding-vert, 8px) var(--tooltip-padding-horiz, 8px);
  font-size: var(--tooltip-font-size, 1.3rem);
  font-weight: var(--tooltip-font-weight, normal);
  line-height: 1.4;
  max-width: 300px;
  opacity: 0;
  z-index: 1000;

  &[data-placement="top"] {
    --translateY: -4px;

    ${ToolTipArrow} {
      translate: -50% 0;
      bottom: -4px;
    }
  }

  &[data-placement="bottom"] {
    --translateY: 4px;

    ${ToolTipArrow} {
      translate: -50% 0;
      top: -4px;
    }
  }

  &[data-placement="left"] {
    --translateX: -4px;

    ${ToolTipArrow} {
      translate: 0 -50%;
      right: -4px;
    }
  }

  &[data-placement="right"] {
    --translateX: 4px;

    ${ToolTipArrow} {
      translate: 0 -50%;
      left: -4px;
    }
  }

  &[data-entering] {
    opacity: 1;
    translate: var(--translateX, 0) var(--translateY, 0);
    transition: all 300ms;
  }

  &[data-exiting] {
    opacity: 0;
    translate: 0 0;
    transition: all 300ms;
  }
`;

export const StyledToolTipTarget = styled.span``;
