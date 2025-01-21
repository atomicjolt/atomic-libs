import { useContext } from "react";
import { Node } from "react-stately";
import { useTableSelectAllCheckbox } from "@react-aria/table";
import { useRenderProps } from "@hooks/useRenderProps";
import { Collection, createBranchComponent } from "@react-aria/collections";

import { useCollectionRenderer } from "@hooks/useCollectionRenderer";
import { CheckBox, CheckBoxContext } from "@components/Inputs/Checkbox";
import { DEFAULT_SLOT } from "@hooks/useSlottedContext";

import { TableStateContext } from "../Table.context";
import { StyledThead } from "../Table.styles";
import { TableRowGroup } from "./TableRowGroup";
import { TableHeaderRow } from "./TableHeaderRow";
import { TableColumn } from "./TableColumn";
import { useTableOptions } from "../hooks/useTableOptions";

export interface TableHeaderProps<T> {
  /** Columns to render in the header in a dynamic collection
   *
   * @example
   * ```jsx
   * const columns = [
   *  { id: "column-1", title: "Column 1" },
   *  { id: "column-2", title: "Column 2" },
   *  { id: "column-3", title: "Column 3" },
   * ];
   * <Table.Header columns={columns}>
   *   {(column) => <Table.Column>{column.title}</Table.Column>}
   * </Table.Header>
   */
  columns?: T[];
  children?:
    | React.ReactNode
    | React.ReactNode[]
    | ((column: T) => React.ReactNode);
}

export const TableHeader = createBranchComponent(
  "tableheader",
  function TableHeader<T extends object>(
    props: TableHeaderProps<T>,
    ref: React.ForwardedRef<HTMLTableSectionElement>,
    header: Node<T>
  ) {
    const state = useContext(TableStateContext)!;
    const { checkboxProps } = useTableSelectAllCheckbox(state);

    const { CollectionBranchRenderer } = useCollectionRenderer();

    const renderProps = useRenderProps({
      componentClassName: "aje-table__header",
    });

    return (
      <CheckBoxContext.Provider
        value={{
          slots: {
            [DEFAULT_SLOT]: {},
            selection: checkboxProps,
          },
        }}
      >
        <TableRowGroup type={StyledThead} {...renderProps} ref={ref}>
          <TableHeaderRow item={header} state={state}>
            <CollectionBranchRenderer
              collection={state.collection!}
              parent={header}
            />
          </TableHeaderRow>
        </TableRowGroup>
      </CheckBoxContext.Provider>
    );
  },
  (props) => <Collection items={props.columns}>{props.children}</Collection>
);

export function TableHeaderWrapper<T extends object>(
  props: TableHeaderProps<T>
) {
  const { selectionMode } = useTableOptions();

  return (
    <TableHeader {...props}>
      {["multiple", "single"].includes(selectionMode ?? "") && (
        // 32 is the width of the checkbox
        <TableColumn width={32}>
          {selectionMode === "multiple" && <CheckBox slot="selection" />}
        </TableColumn>
      )}
      <Collection items={props.columns}>{props.children}</Collection>
    </TableHeader>
  );
}
