import styled, { css } from "styled-components";
import mixins from "../../../styles/mixins";
import { ComboInput, Input } from "../../Fields";

const ShowVerticalDividerMixin = css`
  &[data-divider] {
    border-right: var(--table-border-width) solid var(--table-border-clr);
  }
`;

export const StyledTable = styled.table`
  ${mixins.Regular}
  border-spacing: 0;
  border-width: 0;
  width: 100%;
  font-size: var(--table-font-size);
  color: var(--text-clr);
  border: solid var(--table-border-clr);
  border-width: var(--table-border-width);
  border-radius: var(--table-border-radius);
`;

export const StyledTh = styled.th`
  ${mixins.Bold}
  border: solid var(--table-border-clr);
  border-width: 0 0 var(--table-border-width) 0;
  text-align: left;
  font-size: var(--table-header-font-size);
  color: var(--text-clr-alt);
  text-transform: uppercase;
  padding: calc(var(--table-padding-vert) + 0.25em) var(--table-padding-horz);

  ${ShowVerticalDividerMixin}

  &[data-sortable] {
    .swap-icon {
      visibility: hidden;
    }

    &:hover {
      background-color: var(--neutral100);
      cursor: pointer;

      .swap-icon {
        visibility: visible;
      }
    }

    &:focus-visible {
      background-color: var(--neutral100);
      outline: 2px solid var(--neutral600);
      outline-offset: -2px;
    }
  }

  &[data-draggable]:hover {
    background-color: var(--neutral100);
    cursor: pointer;
  }
`;

export const ThContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;

  &.is-centered {
    justify-content: center;
  }
`;

export const ColumnDragIndicator = styled.div`
  background-color: var(--accent-clr);
  width: 2px;
  height: 48px;
  position: absolute;
  left: calc(var(--table-padding-horz) * -1 + 1px);
`;

export const StyledTd = styled.td`
  border: solid var(--table-border-clr);
  border-width: 0 0 var(--table-border-width) 0;
  text-align: left;
  font-weight: inherit;
  font-size: var(--table-cell-font-size);
  height: 48px;
  vertical-align: middle;
  padding: var(--table-padding-vert) var(--table-padding-horz);
  outline: none;

  ${ShowVerticalDividerMixin}
`;

export const RowHeader = styled.th`
  border: solid var(--table-border-clr);
  border-width: 0 0 var(--table-border-width) 0;
  text-align: left;
  font-weight: inherit;
  width: 25%;

  height: 48px;
  vertical-align: middle;
  padding: var(--table-padding-vert) var(--table-padding-horz);

  ${ShowVerticalDividerMixin}
`;

export const StyledThead = styled.thead`
  background-color: var(--table-bg-clr);
`;

export const StyledTBody = styled.tbody``;

export const StyledRow = styled.tr`
  background-color: var(--table-bg-clr);
`;

export const SearchComboInput = styled(ComboInput)`
  --input-height: 30px;
  --input-padding-horiz: 0px;
  --btn-padding: 0px 5px;

  height: 3rem;
  width: 0;
  transition: width 0.3s ease;
  align-items: center;
  border: none;

  button {
    display: none;
  }

  &[aria-expanded="true"] {
    --input-padding-horiz: 12px;
    border: var(--input-border);
    width: 20rem;

    button {
      display: flex;
    }
  }
`;

export const SearchInput = styled(Input)``;
