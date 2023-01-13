import styled from "styled-components";
import mixins from "../../../styles/mixins";

export const IconMenuWrapper = styled.div`
  position: relative;
  display: inline-block;
  color: var(--text-clr);
`;

export const IconMenuDropdown = styled.div`
  border-radius: 5px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.5);
  background-color: var(--neutral50);
  padding: 8px 0;
  z-index: 100;
  transform: scaleY(0.9);
  transform-origin: top;
`;

export const IconMenuOption = styled.button`
  ${mixins.Regular}
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  width: 100%;
  gap: 12px;
  padding: 6px 24px 6px 16px;
  min-height: 36px;
  line-height: 1;
  color: var(--option-text-clr, inherit);
  font-size: 1.6rem;
  white-space: nowrap;
  background-color: var(--option-bg-clr);

  --option-icon-clr: var(--neutral600);
  i {
    font-size: 2rem;
    color: var(--option-icon-clr);
  }

  &:hover {
    --option-bg-clr: var(--neutral100);
    cursor: pointer;
  }
  &:active {
    --option-bg-clr: var(--neutral200);
  }
  &.is-focused {
    --option-bg-clr: var(--primary700);
    --option-text-clr: var(--text-clr-inverted);
    --option-icon-clr: var(--text-clr-inverted);
    --option-selected-clr: var(--text-clr-inverted);
  }
`;
