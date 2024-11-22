import { useRef, MouseEvent, useContext } from "react";
import { mergeProps, useObjectRef } from "@react-aria/utils";
import { useTableCell } from "@react-aria/table";
import { GridNode } from "@react-types/grid";
import { useFocusRing } from "@hooks/useFocusRing";
import { useRenderProps } from "@hooks/useRenderProps";
import { IconButton } from "@components/Buttons/IconButton";
import { Flex } from "@components/Layout/Flex/Flex";
import { CellContent, RowHeader, StyledCell } from "../../Table.styles";
import { TreeGridState } from "../../Table.types";
import { createLeafComponent } from "@react-aria/collections";
import { TableStateContext } from "../../Table.context";
import { Node } from "react-stately";

interface TableCellProps<T> {
  cell: GridNode<T>;
}

export const TableCell = createLeafComponent("cell", function TableCell<
  T extends object
>(props: TableCellProps<T>, forwardedRef: React.ForwardedRef<HTMLTableCellElement>, cell: Node<T>) {
  // const state = useContext(TableStateContext)!;
  // const ref = useObjectRef(forwardedRef);
  // const { gridCellProps } = useTableCell({ node: cell }, state, ref);
  // const { focusProps, isFocusVisible } = useFocusRing();

  // const isLastCell =
  //   cell.column?.key ===
  //   state.collection.columns[state.collection.columnCount - 1].key;

  // const showDivider =
  //   (cell.props.showDivider ?? cell.column?.props?.showDivider ?? false) &&
  //   !isLastCell;

  // const colSpan = cell.colspan ?? cell.props.colSpan;

  // const isRowHeaderCell = state.collection.rowHeaderColumnKeys.has(
  //   cell?.column?.key!
  // );

  // const isFirstRowHeaderCell =
  //   state.collection.rowHeaderColumnKeys.keys().next().value ===
  //   cell?.column?.key;

  // let showExpandButton = false;
  // let isExpanded = false;

  // if ("keyMap" in state) {
  //   const parentRow = state.keyMap.get(cell.parentKey!);
  //   const isExpandable =
  //     parentRow?.props.childItems?.length > 0 ||
  //     parentRow?.props?.children?.length > state.userColumnCount;

  //   showExpandButton = isFirstRowHeaderCell && isExpandable;

  //   isExpanded =
  //     state.expandedKeys === "all" || state.expandedKeys.has(cell.parentKey!);
  // }

  // const nestedLevel = cell.level - 2;

  // const levelOffset = isRowHeaderCell
  //   ? `calc(var(--table-padding-horz) + var(--table-nesting-offset) * ${nestedLevel})`
  //   : "var(--table-padding-horz)";

  // const renderProps = useRenderProps({
  //   componentClassName: "aje-table__cell",
  //   className: cell.props.className,
  //   style: cell.props.style,
  //   selectors: {
  //     "data-divider": showDivider,
  //     "data-focused": isFocusVisible,
  //   },
  // });

  // const style = isRowHeaderCell ? { paddingLeft: levelOffset } : {};

  // const customGridCellProps = cell.props.isStatic
  //   ? {
  //       ...gridCellProps,
  //       onMouseDown: (e: MouseEvent) => {
  //         e.stopPropagation();
  //       },
  //       onPointerDown: (e: MouseEvent) => {
  //         e.stopPropagation();
  //       },
  //     }
  //   : gridCellProps;

  // const cellProps = mergeProps(customGridCellProps, focusProps, renderProps, {
  //   colSpan: colSpan,
  //   style,
  // });

  // const Element = isRowHeaderCell ? RowHeader : StyledCell;

  // return (
  //   <Element {...cellProps} ref={ref}>
  //     <Flex alignItems="center" gap={"var(--table-padding-horz)"}>
  //       {showExpandButton && (
  //         <IconButton
  //           icon={isExpanded ? "expand_more" : "chevron_right"}
  //           variant="content"
  //           onPress={() =>
  //             (state as TreeGridState<T>).toggleKey(cell.parentKey!)
  //           }
  //           aria-label="Expand row"
  //           className="aje-table__expand-button"
  //         />
  //       )}
  //       <CellContent className="aje-table__cell__content">
  //         {cell.rendered}
  //       </CellContent>
  //     </Flex>
  //   </Element>
  // );

  return (
    <StyledCell ref={forwardedRef}>
      <CellContent>{props.children}</CellContent>
    </StyledCell>
  );
});
