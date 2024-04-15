import styled from "styled-components";

export const ToolTipArrow = styled.div`
  position: absolute;
  background-color: var(--background-clr-inverted);
  border-radius: var(--radius);
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  z-index: 999;
`;

export const ToolTipOverlay = styled.div`
  background-color: var(--background-clr-inverted);
  color: var(--text-clr-inverted);
  border-radius: var(--radius);
  padding: 8px;
  font-size: 1.4rem;
  opacity: 0;
  z-index: 1000;

  &[data-placement="top"] {
    --transform: translateY(-4px);

    ${ToolTipArrow} {
      bottom: -4px;
    }
  }

  &[data-placement="bottom"] {
    --transform: translateY(4px);

    ${ToolTipArrow} {
      top: -4px;
    }
  }

  &[data-placement="left"] {
    --transform: translateX(-4px);

    ${ToolTipArrow} {
      right: -4px;
    }
  }

  &[data-placement="right"] {
    --transform: translateX(4px);

    ${ToolTipArrow} {
      left: -4px;
    }
  }

  &[data-entering] {
    opacity: 1;
    transform: var(--transform);
    transition: all 300ms;
  }

  &[data-exiting] {
    opacity: 0;
    transform: translateY(0);
    transition: all 300ms;
  }
`;

export const StyledToolTipTarget = styled.span``;
