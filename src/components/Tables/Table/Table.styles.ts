import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { Input, InputWrapper } from "../../../styles/input";

export const StyledTable = styled.table`
  ${mixins.Regular}
  border-collapse: separate;
  border-spacing: 0;
  border: solid var(--table-border-clr);
  border-width: 0;
  width: 100%;
  font-size: var(--table-font-size);
  color: var(--text-clr);

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

  &.aje-table--full-borders {
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

  &.aje-table--sheet {
    border-collapse: collapse;

    --table-header-font-size: 1.4rem;
    --table-cell-font-size: 1.4rem;

    th {
      ${mixins.Bold}
      background: var(--neutral100);
      border: 0.1rem solid var(--table-border-clr);
      height: 4rem;
      color: var(--text-clr-alt);
      padding: 0 1rem 0 1.2rem;
      text-transform: uppercase;

      &.is-sortable:hover {
        background-color: var(--neutral200);
      }
    }

    td {
      ${mixins.Regular}
      height: 3rem;
      padding: 1rem 4rem 1rem 1.2rem;
      border: 0.1rem solid var(--neutral300);
    }

    tbody tr:hover td {
      background-color: var(--neutral100);
    }
  }
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

export const StyledTBody = styled.tbody``;

export const StyledRow = styled.tr`
  background-color: var(--table-bg-clr);

  &.is-selected {
    --table-bg-clr: var(--neutral300);
  }

  &:focus-within,
  &.is-focused {
    --table-bg-clr: var(--neutral200);
  }
`;

export const SearchInputWrapper = styled(InputWrapper)`
  --input-height: 30px;
  --input-padding-horiz: 0px;
  --btn-padding: 0px 5px;

  height: 30px;
  /* display: none; */
  width: 0;
  transition: width 0.3s ease;
  align-items: center;
  border: none;

  button {
    display: none;
  }

  &.is-expanded {
    --input-padding-horiz: 12px;
    border: var(--input-border);
    width: 200px;

    button {
      display: flex;
    }
  }
`;

export const SearchInput = styled(Input)``;
