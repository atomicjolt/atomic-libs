import styled from "styled-components";
import mixins from "../../../styles/mixins";

export const TableWrapper = styled.div`
  max-width: 100%;
  overflow-x: auto;
  scrollbar-gutter: stable;
  position: relative;
`;

export const StyledTable = styled.table`
  ${mixins.Regular}
  border-collapse: separate;
  border-spacing: 0;
  border: solid var(--table-border-clr);
  border-width: 0;
  width: 100%;
  font-size: var(--table-font-size);
  color: var(--text-clr);

  &.has-vertical-borders {
    border-width: var(--table-border-width) 0 0 var(--table-border-width);
    border-radius: var(--table-border-radius);

    th,
    td {
      border-width: 0 var(--table-border-width) var(--table-border-width) 0;
    }
    thead {
      th {
        &:first-of-type {
          border-radius: var(--table-border-radius) 0 0 0;
          button {
            border-radius: var(--table-border-radius) 0 0 0;
          }
        }
        &:last-of-type {
          border-radius: 0 var(--table-border-radius) 0 0;
          button {
            border-radius: 0 var(--table-border-radius) 0 0;
          }
        }
      }
    }
    tbody {
      tr:last-of-type {
        th {
          border-radius: 0 0 0 var(--table-border-radius);
        }
        td:last-of-type {
          border-radius: 0 0 var(--table-border-radius) 0;
        }
      }
    }
  }

  &.is-sticky {
    thead {
      th {
        &:first-of-type {
          position: sticky;
          left: var(--table-border-width);
          z-index: 2;
          box-shadow: calc(var(--table-border-width) * -1) 0 0
            var(--table-border-clr);
        }
      }
    }
    tbody {
      th {
        position: sticky;
        left: var(--table-border-width);
        z-index: 2;
        box-shadow: calc(var(--table-border-width) * -1) 0 0
          var(--table-border-clr);
      }
    }
  }
`;

export const StyledTh = styled.th`
  border: solid var(--table-border-clr);
  border-width: 0 0 var(--table-border-width) 0;
  text-align: left;
  font-weight: inherit;

  ${mixins.Bold}
  font-size: var(--table-header-font-size);
  color: var(--text-clr-alt);
  text-transform: uppercase;
  padding: calc(var(--table-padding-vert) + 0.25em) var(--table-padding-horz);

  &.is-sortable {
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

  &[aria-sort="ascending"] {
    button::after {
      content: "\\e5d8";
      color: var(--table-sort-icon-clr);
    }
  }

  &[aria-sort="descending"] {
    button::after {
      content: "\\e5db";
      color: var(--table-sort-icon-clr);
    }
  }
  }
`;

export const DraggableTh = styled(StyledTh)`
  &:hover {
    background-color: var(--neutral100);
    cursor: grab;
  }
`;

export const ThContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
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
  height: 48px;
  vertical-align: middle;
  padding: var(--table-padding-vert) var(--table-padding-horz);
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
`;


export const StyledThead = styled.thead`
  background-color: var(--table-bg-clr);
`;

export const StyledTBody = styled.tbody`
`;

export const StyledRow = styled.tr`
  background-color: var(--table-bg-clr);

  &.is-selected {
    --table-bg-clr: var(--neutral300);
  }

  &:hover {
    --table-bg-clr: var(--neutral200);
  }
  &:focus-within,
  &.is-focused {
    --table-bg-clr: var(--neutral200);
  }
`;
