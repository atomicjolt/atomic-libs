import styled from "styled-components";

export const ToolTipWrapper = styled.div`
  position: relative;
  max-width: fit-content;
  --popover-animation: opacity 200ms ease;

  .aje-popover {
    background-color: rgba(0, 0, 0, 0.774);
    color: white;
    font-size: 15px;
    padding: 5px;
    border-radius: 5px;
  }

  &:hover {
    .aje-popover {
      visibility: visible;
      opacity: 1;
    }
  }
`;
