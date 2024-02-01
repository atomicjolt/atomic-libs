import styled, { keyframes } from "styled-components";
import mixins from "../../../styles/mixins";

const scale = keyframes`
  from {
    transform: scaleY(0.9);
  }

  to {
    transform: scaleY(1);
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  border-radius: 5px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.5);
  background-color: var(--neutral50);
  padding: 8px 0;
  z-index: 100;
  transform-origin: top;
  animation: ${scale} 0.2s ease-in-out;
`;

export const SubMenuList = styled.ul`
  list-style: none;
  padding: 0px;
`;

export const MenuSectionSeperator = styled.li`
  margin: 2px 5px;
  border-top: 1px solid var(--neutral300);
`;

export const MenuSectionTitle = styled.span`
  ${mixins.Regular}
  margin: 8px 16px;
  color: var(--neutral400);
  font-size: 1.4rem;
  line-height: 1;
`;

export const MenuOption = styled.li`
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
  &:active,
  &:focus-visible {
    --option-bg-clr: var(--neutral200);
    outline: none;
  }
  &.is-focused {
    --option-bg-clr: var(--primary700);
    --option-text-clr: var(--text-clr-inverted);
    --option-icon-clr: var(--text-clr-inverted);
    --option-selected-clr: var(--text-clr-inverted);
  }
`;
