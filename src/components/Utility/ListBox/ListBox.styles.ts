import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { scaleAnimation } from "../../../styles/animations";

export const List = styled.ul`
  list-style: none;
  border-radius: var(--radius);
  box-shadow: var(--listbox-shadow);
  background-color: var(--listbox-bg-clr);
  padding: 8px 0;
  z-index: 100;
  ${scaleAnimation}
`;

export const SubList = styled.ul`
  list-style: none;
  padding: 0px;
`;

export const SectionSeperator = styled.li`
  margin: 2px 5px;
  padding-top: 10px;
  border-top: 1px solid var(--neutral300);
`;

export const SectionTitle = styled.span`
  ${mixins.Regular}
  color: var(--neutral400);
  line-height: 1;
  padding: 6px 24px 6px 16px;
  font-size: 1.8rem;
`;

export const ListItem = styled.li`
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
  color: var(--listbox-text-clr, inherit);
  font-size: 1.6rem;
  white-space: nowrap;
  background-color: var(--listbox-bg-clr);

  --listbox-icon-clr: var(--text-clr-alt);

  i {
    font-size: 2rem;
    color: var(--listbox-icon-clr);
  }

  &:hover {
    --listbox-bg-clr: var(--neutral100);
    cursor: pointer;
  }

  &[data-focus-visible="true"] {
    --listbox-bg-clr: var(--background-clr-alt);
    outline: 1px solid var(--text-clr-alt);
  }

  &[aria-selected="true"] {
    background: var(--highlight-clr);
    color: white;
  }

  &[aria-disabled] {
    color: var(--neutral400);
  }
`;
