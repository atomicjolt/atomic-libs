import { HasChildren } from "@/types";
import { useRef } from "react";
import { useTableHeaderRow } from "react-aria";
import { Node, TableState } from "react-stately";
import { TableRowGroup } from "./TableRowGroup";
import { StyledTh, StyledThead } from "../../Table.styles";
import { TableSelectAllCell } from "./TableCheckbox";
import { DraggableTableColumnHeader, TableColumnHeader } from "./TableColumn";
import { ExtendedTableState } from "../../hooks/useExtendedTableState";

interface TableHeaderRowProps<T> extends HasChildren {
  item: Node<T>;
  state: TableState<T>;
}

export function TableHeaderRow<T>(props: TableHeaderRowProps<T>) {
  const { item, children, state } = props;
  const ref = useRef(null);
  const { rowProps } = useTableHeaderRow({ node: item }, state, ref);

  return (
    <tr {...rowProps} ref={ref}>
      {children}
    </tr>
  );
}

interface TableHeaderProps<T> {
  state: ExtendedTableState<T>;
}

export function TableHeader<T extends object>(props: TableHeaderProps<T>) {
  const { state } = props;
  const { collection } = state;

  const hasGroupedRows = [...collection.body.childNodes]
    .flatMap((r) => [...collection.getChildren!(r.key)])
    .some((node) => node.type === "item");

  return (
    <TableRowGroup type={StyledThead}>
      {collection.headerRows.map((headerRow) => (
        <TableHeaderRow key={headerRow.key} item={headerRow} state={state}>
          {hasGroupedRows && <StyledTh style={{ width: "48px" }} />}
          {[...headerRow.childNodes].map((column) => {
            if (column?.props?.isSelectionCell) {
              return (
                <TableSelectAllCell
                  key={column.key}
                  column={column}
                  state={state}
                />
              );
            } else if (column?.props?.allowsReordering) {
              return (
                <DraggableTableColumnHeader
                  key={column.key}
                  column={column}
                  state={state}
                  onDrop={(columnKey) =>
                    state.reorderColumns(columnKey, column.key)
                  }
                />
              );
            } else {
              return (
                <TableColumnHeader
                  key={column.key}
                  column={column}
                  state={state}
                />
              );
            }
          })}
        </TableHeaderRow>
      ))}
    </TableRowGroup>
  );
}
