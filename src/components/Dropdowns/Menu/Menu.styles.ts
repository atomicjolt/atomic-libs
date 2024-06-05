import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { scaleAnimation } from "../../../styles/animations";

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  border-radius: var(--menu-border-radius);
  box-shadow: var(--menu-box-shadow);
  background-color: var(--menu-bg-clr);
  padding: 8px 0;
  z-index: 100;
  min-width: var(--trigger-width, auto);

  ${scaleAnimation}

  &:focus {
    outline: none;
  }
`;

export const SubMenuList = styled.ul`
  list-style: none;
  padding: 0px;
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
  min-height: var(--menu-item-height);
  line-height: 1;
  color: var(--menu-item-text-clr, inherit);
  font-size: 1.6rem;
  white-space: nowrap;
  background-color: var(--menu-item-bg-clr);
  text-decoration: none;

  --menu-item-icon-clr: var(--neutral600);
  i {
    font-size: 2rem;
    color: var(--menu-item-icon-clr);
  }

  &:hover {
    --menu-item-bg-clr: var(--neutral100);
    cursor: pointer;
  }
  &:active,
  &:focus-visible {
    --menu-item-bg-clr: var(--neutral200);
    outline: none;
  }
  &.is-focused {
    --menu-item-bg-clr: var(--primary700);
    --menu-item-text-clr: var(--text-clr-inverted);
    --menu-item-icon-clr: var(--text-clr-inverted);
    --menu-item-selected-clr: var(--text-clr-inverted);
  }

  &[aria-disabled] {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      background: none;
    }
  }
`;
