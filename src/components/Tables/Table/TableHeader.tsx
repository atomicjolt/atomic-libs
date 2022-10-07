import React, { useContext } from "react";
import cn from "classnames";
import { HasClassName, SortDirection } from "../../../types";
import TableContext from "./tableContext";

interface BaseProps extends HasClassName {
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

export type TableHeaderProps = BaseProps &
  SortProps &
  React.HTMLProps<HTMLTableCellElement>;

/** Table Header Component */
function TableHeader(props: TableHeaderProps) {
  const {
    children = "",
    defaultSortDirection = "ascending",
    sortPath,
    width,
    className,
    ...rest
  } = props;

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
        className={cn("is-sortable", className)}
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
    <th className={cn(className)} scope="col" style={styleWidth} {...rest}>
      {children}
    </th>
  );
}

TableHeader.displayName = "Table.Header";

export default TableHeader;
