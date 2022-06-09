import React, { useContext, useState } from "react";
import { SortDirection } from "../../../types";
import TableContext from "./tableContext";

interface BaseProps {
  /** Must include a label for the header. */
  children: React.ReactNode;
  /** For when a column needs width adjustments */
  width?: string;
}

type SortProps =
  | {
      /** Is the column sortable. */
      sortable?: false;
      /** Define a default sort for the column */
      defaultSortDirection?: never;
      sortPath?: never;
    }
  | {
      sortable?: true;
      defaultSortDirection: SortDirection;
      sortPath: string;
    };

export type Props = BaseProps & SortProps;

/** Table Header Component */
function TableHeader({
  children,
  sortable,
  defaultSortDirection,
  sortPath,
  width,
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

  if (sortable) {
    return (
      <th
        className="is-sortable"
        scope="col"
        aria-sort={colActive}
        style={styleWidth}
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
    <th scope="col" style={styleWidth}>
      {children}
    </th>
  );
}

TableHeader.displayName = "Table.Header";

export default TableHeader;
