import { useRef } from "react";
import { useTableHeaderRow } from "react-aria";
import { Node, TableState } from "react-stately";
import { HasChildren } from "../../../../../types";
import { TableRowGroup } from "./TableRowGroup";
import { StyledThead } from "../../Table.styles";
import { TableSelectAllCell } from "./TableCheckbox";
import { TableColumn } from "./TableColumn";
import { ExtendedTableState } from "../../hooks/useExtendedTableState";
import { useRenderProps } from "@/hooks/useRenderProps";

interface TableHeaderRowProps<T> extends HasChildren {
  item: Node<T>;
  state: TableState<T>;
}

export function TableHeaderRow<T>(props: TableHeaderRowProps<T>) {
  const { item, children, state } = props;
  const ref = useRef(null);
  const { rowProps } = useTableHeaderRow({ node: item }, state, ref);

  const renderProps = useRenderProps({
    componentClassName: "aje-table__header",
    ...item.props,
  });

  return (
    <tr {...rowProps} {...renderProps} ref={ref}>
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

  return (
    <TableRowGroup type={StyledThead}>
      {collection.headerRows.map((headerRow) => {
        const columns = [...collection.getChildren!(headerRow.key)];
        let needsExpander = false;

        return (
          <TableHeaderRow key={headerRow.key} item={headerRow} state={state}>
            {columns.map((column) => {
              if (column?.props?.isSelectionCell) {
                return (
                  <TableSelectAllCell
                    key={column.key}
                    column={column}
                    state={state}
                  />
                );
              } else if (column?.props?.isExpanderCell) {
                // return <StyledTh key={column.key} style={{ width: "48px" }} />;
                needsExpander = true;
                return null;
              } else {
                let colSpan: number = column.colspan || 1;
                if (needsExpander) {
                  needsExpander = false;
                  colSpan += 1;
                }

                return (
                  <TableColumn
                    key={column.key}
                    column={column}
                    state={state}
                    colSpan={colSpan}
                  />
                );
              }
            })}
          </TableHeaderRow>
        );
      })}
    </TableRowGroup>
  );
}
