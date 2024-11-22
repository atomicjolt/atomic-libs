import { useRenderProps } from "@hooks/useRenderProps";
import { StyledThead } from "../../Table.styles";
import { TableRowGroup } from "./TableRowGroup";
import { TableHeaderRow } from "./TableHeaderRow";
import { Node, TableHeaderProps } from "react-stately";
import { createBranchComponent } from "@react-aria/collections";
import { useContext } from "react";
import { TableStateContext } from "../../Table.context";
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";

// interface TableHeaderProps<T> {
//   state: TableState<T> | TreeGridState<T>;
// }

export const TableHeader = createBranchComponent(
  "tableheader",
  function TableHeader<T extends object>(
    props: TableHeaderProps<T>,
    ref: React.ForwardedRef<HTMLTableSectionElement>,
    header: Node<T>
  ) {
    const state = useContext(TableStateContext)!;

    const { CollectionBranchRenderer } = useCollectionRenderer();

    const renderProps = useRenderProps({
      componentClassName: "aje-table__header",
    });

    return (
      <TableRowGroup type={StyledThead} {...renderProps} ref={ref}>
        <TableHeaderRow item={header} state={state}>
          <CollectionBranchRenderer
            collection={state.collection!}
            parent={header}
          />
        </TableHeaderRow>
        {/* {collection.headerRows.map((headerRow) => {
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
        })} */}
      </TableRowGroup>
    );
  }
);
