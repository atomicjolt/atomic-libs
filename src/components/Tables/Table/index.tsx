import React, { TdHTMLAttributes, useState } from "react";
import "./styles.scss";
import cn from "classnames";
import { HasChildren, SortDirection } from "../../../types";
import TableHeader from "./TableHeader";
import TableContext from "./tableContext";

interface BaseProps {
  /** Must include a title to label the table. */
  title: string;
  /** Adds sticky first column when a horizontal scrollbar is present. Reccommended to use with vertical borders on. */
  sticky?: boolean;
  /** Adds vertical borders between columns. */
  verticalBorders?: boolean;
  children: React.ReactNode;
}

type SortProps =
  | {
      /** Must include if using sortable headers, adds accessible instructions to the table title. */
      sortDirection?: never;
      sortPath?: never;
      onSort?: never;
    }
  | {
      sortDirection: SortDirection;
      sortPath: string;
      onSort: (path: string, direction: SortDirection) => void;
    };

export type Props = BaseProps & SortProps & React.HTMLProps<HTMLTableElement>;

/** Table Component */
function Table({
  title,
  sticky = false,
  verticalBorders = false,
  sortDirection,
  sortPath,
  onSort = () => {},
  children,
  ...rest
}: Props) {
  /* Add functionality to remove sort order from other headers if you click on other ones. */
  return (
    <div className="aj-table-overflow">
      <table
        className={cn("aj-table", {
          "has-vertical-borders": verticalBorders,
          "is-sticky": sticky,
        })}
        {...rest}
      >
        <caption className="aj-hidden">
          {title}
          {sortPath ? (
            <span>, column headers with buttons are sortable.</span>
          ) : null}
        </caption>
        <TableContext.Provider
          value={{ sortDirection, sortPath, onSort: onSort }}
        >
          {children}
        </TableContext.Provider>
      </table>
    </div>
  );
}

export function TableHead(props: React.HTMLProps<HTMLTableSectionElement>) {
  return <thead {...props} />;
}

Table.Head = TableHead;
TableHead.displayName = "Table.Head";

Table.Header = TableHeader;

export function TableBody(props: React.HTMLProps<HTMLTableSectionElement>) {
  return <tbody {...props} />;
}

Table.Body = TableBody;
TableBody.displayName = "Table.Body";

type TableRowProps =
  | {
      readonly data: React.ReactNode[];
      readonly children?: never;
    }
  | {
      readonly data?: never;
      readonly children: React.ReactNode;
    };

export function TableRow({
  data,
  children,
  ...rest
}: TableRowProps & Omit<React.HTMLProps<HTMLTableRowElement>, "data">) {
  if (children) {
    return <tr {...rest}>{children}</tr>;
  }

  if (data) {
    return (
      <tr {...rest}>
        {data.map((d) => (
          <TableCell>{d}</TableCell>
        ))}
      </tr>
    );
  }

  return null;
}

Table.Row = TableRow;
TableRow.displayName = "Table.Row";

interface TableCellProps extends React.HTMLProps<HTMLTableCellElement> {}

export function TableCell(props: TableCellProps) {
  return <td {...props} />;
}

Table.Cell = TableCell;
TableCell.displayName = "Table.Cell";

export default Table;
