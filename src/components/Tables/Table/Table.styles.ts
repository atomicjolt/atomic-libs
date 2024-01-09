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
  background-color: var(--table-bg-clr);
  border: solid var(--table-border-clr);
  border-width: 0 0 var(--table-border-width) 0;
  text-align: left;
  font-weight: inherit;
`;

export const StyledTd = styled.td`
  background-color: var(--table-bg-clr);
  border: solid var(--table-border-clr);
  border-width: 0 0 var(--table-border-width) 0;
  text-align: left;
  font-weight: inherit;
`;

export const StyledThead = styled.thead`
  th {
    ${mixins.Bold}
    font-size: var(--table-header-font-size);
    color: var(--text-clr-alt);
    text-transform: uppercase;
    padding: calc(var(--table-padding-vert) + 0.25em) var(--table-padding-horz);

    &.is-sortable {
      padding: 0;

      button {
        position: relative;
        font-family: inherit;
        font-weight: inherit;
        color: inherit;
        text-transform: inherit;
        width: 100%;
        border: none;
        text-align: left;
        background-color: var(--table-bg-clr);
        padding: calc(var(--table-padding-vert) + 0.25em)
          var(--table-padding-horz);
        padding-right: 32px;

        &::after {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-family: "Material Icons";
          font-weight: normal;
          color: var(--table-sort-icon-clr);
          font-size: 1.8rem;
          line-height: 1;
          margin-left: 4px;
        }

        &:hover {
          background-color: var(--neutral100);
          cursor: pointer;

          &::after {
            content: "\\e8d5";
            color: var(--table-sort-icon-hover-clr);
          }
        }
        &:active {
          background-color: var(--neutral200);
        }
        &:focus-visible {
          background-color: var(--neutral100);
          outline: 2px solid var(--neutral600);
          outline-offset: -2px;
        }
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
  }
`;

export const StyledTBody = styled.tbody`
  th {
    width: 25%;
  }
  th,
  td {
    height: 48px;
    vertical-align: middle;
    padding: var(--table-padding-vert) var(--table-padding-horz);
  }
`;