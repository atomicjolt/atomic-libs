import { MouseEvent, useContext } from "react";
import { mergeProps, useObjectRef } from "@react-aria/utils";
import { useTableCell } from "@react-aria/table";
import { GridNode } from "@react-types/grid";
import { useFocusRing } from "@hooks/useFocusRing";
import { useRenderProps } from "@hooks/useRenderProps";
import { RowHeader, StyledCell } from "../Table.styles";
import { createLeafComponent } from "@react-aria/collections";
import { TableStateContext } from "../Table.context";
import { DomProps, RenderBaseProps } from "../../../../types";

export interface TableCellProps extends RenderBaseProps<never>, DomProps {
  // TODO: should this stay here? The rowHeader is defined at the column level in the collection
  /** Whether the cell is a header for the row. When true, the cell will be a th instead of a td */
  isRowHeader?: boolean;
  /** The contents of the cell. */
  children?: React.ReactNode;
  /** A string representation of the cell's contents, used for features like typeahead. */
  textValue?: string;
  /** The number of columns the cell should span. */
  colSpan?: number;
  /** Whether to show a divider between this cell and the next cell */
  showDivider?: boolean;
  /** Callback when a user clicks on or otherwise interacts with the cell */
  onAction?: () => void;
  /** Controls whether the text in the cell is selectable. When isStatic is false users will not be able to select text inside of the cell */
  isStatic?: boolean;
  /** Alignment of the cell content. Inherits from the column is not specified */
  align?: "left" | "right" | "center";
}

export const TableCell = createLeafComponent("cell", function TableCell<
  T extends object
>(props: TableCellProps, forwardedRef: React.ForwardedRef<HTMLTableCellElement>, cell: GridNode<T>) {
  const state = useContext(TableStateContext)!;
  const ref = useObjectRef(forwardedRef);

  const { collection } = state;

  cell.column = collection.columns[cell.index];

  const { gridCellProps } = useTableCell({ node: cell }, state, ref);
  const { focusProps } = useFocusRing();

  const isLastCell =
    cell.column?.key ===
    state.collection.columns[state.collection.columnCount - 1].key;

  const showDivider =
    (cell.props.showDivider ?? cell.column?.props?.showDivider ?? false) &&
    !isLastCell;

  const colSpan = props.colSpan || cell.column?.props.colSpan;

  const isRowHeaderCell = state.collection.rowHeaderColumnKeys.has(
    cell?.column?.key!
  );

  const align = props.align ?? cell.column?.props?.align ?? undefined;

  const isFirstRowHeaderCell =
    state.collection.rowHeaderColumnKeys.keys().next().value ===
    cell?.column?.key;

  let showExpandButton = false;
  let isExpanded = false;

  if ("keyMap" in state) {
    const parentRow = state.keyMap.get(cell.parentKey!);
    const isExpandable =
      parentRow?.props.childItems?.length > 0 ||
      parentRow?.props?.children?.length > state.userColumnCount;

    showExpandButton = isFirstRowHeaderCell && isExpandable;

    isExpanded =
      state.expandedKeys === "all" || state.expandedKeys.has(cell.parentKey!);
  }

  const nestedLevel = Math.max(cell.level - 2, 0);

  const levelOffset = isRowHeaderCell
    ? `calc(var(--table-padding-horz) + var(--table-nesting-offset) * ${nestedLevel})`
    : "var(--table-padding-horz)";

  const renderProps = useRenderProps({
    componentClassName: "aje-table__cell",
    ...props,
    selectors: {
      "data-divider": showDivider,
    },
  });

  const style = isRowHeaderCell ? { paddingLeft: levelOffset } : {};

  const customGridCellProps = cell.props.isStatic
    ? {
        ...gridCellProps,
        onMouseDown: (e: MouseEvent) => {
          e.stopPropagation();
        },
        onPointerDown: (e: MouseEvent) => {
          e.stopPropagation();
        },
      }
    : gridCellProps;

  const cellProps = mergeProps(customGridCellProps, focusProps, renderProps, {
    colSpan: colSpan,
    style,
  });

  const Element = isRowHeaderCell ? RowHeader : StyledCell;

  return (
    <Element ref={ref} {...cellProps} style={{ textAlign: align, ...style }}>
      {renderProps.children}
    </Element>
  );
});
