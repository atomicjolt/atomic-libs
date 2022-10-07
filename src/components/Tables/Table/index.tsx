import React, { TdHTMLAttributes, useState } from "react";
import cn from "classnames";
import { HasChildren, HasClassName, SortDirection } from "../../../types";
import TableHeader from "./TableHeader";
import TableContext from "./tableContext";

interface BaseProps extends HasClassName {
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

export type TableProps = BaseProps &
  SortProps &
  React.HTMLProps<HTMLTableElement>;

/** Table Component */
function Table(props: TableProps) {
  const {
    title,
    sticky = false,
    verticalBorders = false,
    sortDirection,
    sortPath,
    onSort = () => {},
    children,
    className,
    ...rest
  } = props;
  /* Add functionality to remove sort order from other headers if you click on other ones. */
  return (
    <div className="aje-table-overflow">
      <table
        className={cn("aje-table", className, {
          "has-vertical-borders": verticalBorders,
          "is-sticky": sticky,
        })}
        {...rest}
      >
        <caption className="aje-hidden">
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

type TableChildProps<E> = Omit<React.HTMLProps<E>, "className"> & HasClassName;

export function TableHead(props: TableChildProps<HTMLTableSectionElement>) {
  const { className, ...rest } = props;
  return <thead className={cn(className)} {...rest} />;
}

Table.Head = TableHead;
TableHead.displayName = "Table.Head";

Table.Header = TableHeader;

export function TableBody(props: TableChildProps<HTMLTableSectionElement>) {
  const { className, ...rest } = props;
  return <tbody className={cn(className)} {...rest} />;
}

Table.Body = TableBody;
TableBody.displayName = "Table.Body";

type TableRowProps = (
  | {
      readonly data: React.ReactNode[];
      readonly children?: never;
    }
  | {
      readonly data?: never;
      readonly children: React.ReactNode;
    }
) &
  HasClassName;

export function TableRow(
  props: TableRowProps &
    Omit<React.HTMLProps<HTMLTableRowElement>, "data" | "className">
) {
  const { data, children, className, ...rest } = props;

  if (children) {
    return (
      <tr className={cn(className)} {...rest}>
        {children}
      </tr>
    );
  }

  if (data) {
    return (
      <tr className={cn(className)} {...rest}>
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

export function TableCell(props: TableChildProps<HTMLTableCellElement>) {
  const { className, ...rest } = props;
  return <td className={cn(className)} {...rest} />;
}

Table.Cell = TableCell;
TableCell.displayName = "Table.Cell";

export default Table;
