import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { MaterialIcon } from "@components/Icons/MaterialIcon";

export const List = styled.ul`
  list-style: none;
  background-color: var(--listbox-bg-clr);
  padding: 8px 0;
  margin: 0;
  min-width: var(--trigger-width, auto);

  &:focus {
    outline: none;
  }

  // For the search input
  --input-border: none;
  --input-border-radius: 0px;
`;

export const SubList = styled.ul`
  list-style: none;
  padding: 0px;
`;

export const SectionTitle = styled.span`
  ${mixins.Regular}
  color: var(--text-clr-alt);
  line-height: 1;
  padding: 6px 24px 6px 16px;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

export const CheckIcon = styled(MaterialIcon)<{ $isSelected: boolean }>`
  margin-left: auto;
  visibility: ${({ $isSelected }) => ($isSelected ? "visible" : "hidden")};
`;

export const ListItem = styled.li`
  ${mixins.Regular}
  ${mixins.FocusVisible()}
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  width: 100%;
  gap: 12px;
  padding: 6px 24px 6px 16px;
  min-height: var(--listbox-item-height);
  line-height: 1;
  font-size: var(--listbox-font-size);
  white-space: nowrap;
  margin: 2px 0px;
  background-color: var(--listbox-bg-clr);
  color: var(--listbox-text-clr, inherit);

  --listbox-icon-clr: var(--text-clr);
  --outline: 1px solid var(--listbox-text-clr);

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
  }

  &[aria-selected="true"] {
    --listbox-icon-clr: var(--text-clr-inverted);
    --listbox-bg-clr: var(--accent-clr);
    color: var(--text-clr-inverted);
  }

  &[aria-selected="true"][data-focus-visible="true"],
  &:hover[aria-selected="true"] {
    --listbox-bg-clr: var(--accent-clr-alt);
    color: var(--text-clr-inverted);
  }

  &[aria-disabled] {
    color: var(--neutral400);
  }
`;
