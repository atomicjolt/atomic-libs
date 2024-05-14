import styled from "styled-components";
import mixins from "../../../styles/mixins";

export const SearchListItem = styled.li`
  border-bottom: 1px solid var(--option-border-clr);

  i {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2.4rem;
    color: var(--neutral400);
  }
`;

export const SearchInput = styled.input`
  ${mixins.Regular}
  border: none;
  background-color: var(--option-bg-clr);
  height: var(--option-height);
  width: 100%;
  padding: 0 32px 0 var(--option-padding-horizontal);
  font-size: var(--option-font-size);
  color: var(--option-text-clr);

  &:focus {
    outline: 2px solid var(--outline-clr-primary);
    outline-offset: -2px;
  }
`;

export const ButtonText = styled.span`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SelectButtonWrapper = styled.div`
  position: relative;
`;
