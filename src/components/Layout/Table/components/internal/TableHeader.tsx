import { useRenderProps } from "@/hooks/useRenderProps";
import { StyledThead } from "../../Table.styles";
import { TableColumn } from "./TableColumn";
import { TreeGridState, TableState } from "../../Table.types";
import { TableSelectAllCell } from "./TableCheckbox";
import { TableRowGroup } from "./TableRowGroup";
import { TableHeaderRow } from "./TableHeaderRow";

interface TableHeaderProps<T> {
  state: TableState<T> | TreeGridState<T>;
}

export function TableHeader<T extends object>(props: TableHeaderProps<T>) {
  const { state } = props;
  const { collection } = state;

  const renderProps = useRenderProps({
    componentClassName: "aje-table__header",
  });

  return (
    <TableRowGroup type={StyledThead} {...renderProps}>
      {collection.headerRows.map((headerRow) => {
        const columns = [...collection.getChildren!(headerRow.key)];
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
              } else {
                return (
                  <TableColumn
                    key={column.key}
                    column={column}
                    state={state}
                    onDrop={(key) => state.reorderColumns(column.key, key)}
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
