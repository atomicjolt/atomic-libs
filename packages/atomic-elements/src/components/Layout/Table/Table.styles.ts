import styled, { css } from "styled-components";
import mixins from "@styles/mixins";
import { ComboInput, Input } from "@components/Fields";
import { SkeletonLoader } from "../../Loaders/SkeletonLoader";
import { Flex } from "../Flex/Flex";

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

  &[data-sticky] {
    border-left-width: 0px;

    thead th:first-child,
    tbody th:first-child,
    tfoot th:first-child {
      border-left-width: var(--table-border-width);
      position: sticky;
      left: 0rem;
      z-index: 1;
    }
  }

  &[data-has-bottom] {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const StyledRow = styled.tr`
  background-color: var(--table-bg-clr);

  &[data-selected] {
    --table-bg-clr: var(--neutral100);
  }

  &[data-focus-visible] {
  }
`;

export const CellContent = styled.span`
  width: 100%;
`;

export const StyledTableBottom = styled.div`
  height: var(--table-cell-height);
  border: solid var(--table-border-clr);
  border-width: 0 var(--table-border-width) var(--table-border-width)
    var(--table-border-width);
  border-radius: 0 0 var(--table-border-radius) var(--table-border-radius);

  &[data-sticky] {
    position: sticky;
    left: 0;
    z-index: 1;
  }
`;

// TABLE HEADER

export const StyledThead = styled.thead`
  background-color: var(--table-bg-clr);

  tr:first-child th {
    border-top-width: 0;
  }
`;

export const ColumnContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
`;

export const StyledTh = styled.th`
  ${mixins.Bold}
  background-color: var(--table-bg-clr);
  border: solid var(--table-border-clr);
  border-width: var(--table-border-width) 0 0 0;
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
  }

  &[data-draggable]:hover {
    background-color: var(--neutral100);
    cursor: pointer;
  }

  &[data-has-children] ${ColumnContent} {
    justify-content: center;
  }
`;

export const ColumnDropIndicator = styled.div`
  background-color: var(--accent-clr);
  width: 2px;
  height: var(--table-cell-height);
  position: absolute;
  left: calc(var(--table-padding-horz) * -1 + 1px);
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

// TABLE BODY

export const StyledTBody = styled.tbody``;

export const RowHeader = styled.th`
  border: solid var(--table-border-clr);
  border-width: var(--table-border-width) 0 0 0;
  background-color: var(--table-bg-clr);
  text-align: left;
  font-weight: inherit;

  height: var(--table-cell-height);
  vertical-align: middle;
  padding: var(--table-padding-vert) var(--table-padding-horz);

  ${ShowVerticalDividerMixin}
`;

export const StyledCell = styled.td`
  background-color: var(--table-bg-clr);
  border: solid var(--table-border-clr);
  border-width: var(--table-border-width) 0 0 0;
  text-align: left;
  font-weight: inherit;
  font-size: var(--table-cell-font-size);
  height: var(--table-cell-height);
  vertical-align: middle;
  padding: var(--table-padding-vert) var(--table-padding-horz);

  &[data-focus-visible] {
    // Styles when a cell is focused
  }

  ${ShowVerticalDividerMixin}
`;

// TODO this height is hard-coded for the default table
// height, figure out how to make the height correct without
// changing the height of the columns
export const CellLoader = styled(SkeletonLoader)`
  width: 100%;
  height: 27px;
`;

// TABLE FOOTER

export const StyledTableFooter = styled.tfoot`
  background-color: var(--table-bg-clr);
`;
