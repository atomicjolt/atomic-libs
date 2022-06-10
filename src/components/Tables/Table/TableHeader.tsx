import React, { useContext } from "react";
import { SortDirection } from "../../../types";
import TableContext from "./tableContext";

interface BaseProps {
  /** What renders as the header */
  children?: React.ReactNode;
  /** For when a column needs width adjustments */
  width?: string | number;
}

type SortProps =
  | {
      /** Define a default sort for the column */
      defaultSortDirection?: never;
      /** a key the identifies this column uniquely */
      sortPath?: never;
    }
  | {
      defaultSortDirection?: SortDirection;
      sortPath: string;
    };

export type Props = BaseProps &
  SortProps &
  React.HTMLProps<HTMLTableCellElement>;

/** Table Header Component */
function TableHeader({
  children = "",
  defaultSortDirection = "ascending",
  sortPath,
  width,
  ...rest
}: Props) {
  const {
    onSort,
    sortDirection,
    sortPath: selectedSortPath,
  } = useContext(TableContext);

  const currentSortedColumn = selectedSortPath === sortPath;
  const colActive = currentSortedColumn ? sortDirection : undefined;

  const styleWidth = {
    width: width,
  };

  if (sortPath) {
    return (
      <th
        className="is-sortable"
        scope="col"
        aria-sort={colActive}
        style={styleWidth}
        {...rest}
      >
        <button
          onClick={() => {
            if (currentSortedColumn) {
              onSort(
                sortPath,
                sortDirection === "ascending" ? "descending" : "ascending"
              );
            } else {
              onSort(sortPath, defaultSortDirection);
            }
          }}
        >
          {children}
        </button>
      </th>
    );
  }

  return (
    <th scope="col" style={styleWidth} {...rest}>
      {children}
    </th>
  );
}

TableHeader.displayName = "Table.Header";

export default TableHeader;
