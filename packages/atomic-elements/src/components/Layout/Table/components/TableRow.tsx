import { useContext } from "react";
import { filterDOMProps, mergeProps, useObjectRef } from "@react-aria/utils";
import { useTableRow } from "@react-aria/table";
import { createBranchComponent } from "@react-aria/collections";
import { Node } from "react-stately";

import { DomProps, RenderBaseProps } from "../../../../types";
import { useFocusRing } from "@hooks/useFocusRing";
import { useRenderProps } from "@hooks/useRenderProps";
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";
import { TableStateContext } from "../Table.context";
import { StyledRow } from "../Table.styles";

export interface TableRowProps<T> extends RenderBaseProps<never>, DomProps {
  /** Callback when a user clicks on or otherwise interacts with the cell */
  onAction?: () => void;
}

export const TableRow = createBranchComponent("row", function TableRow<
  T extends object
>(props: TableRowProps<T>, forwardedRef: React.ForwardedRef<HTMLTableRowElement>, row: Node<T>) {
  const state = useContext(TableStateContext)!;
  const ref = useObjectRef(forwardedRef);
  const isSelected = state.selectionManager.isSelected(row.key);
  const { rowProps } = useTableRow({ node: row }, state, ref);
  const { focusProps } = useFocusRing();

  const renderProps = useRenderProps({
    componentClassName: "aje-table__row",
    ...props,
    selectors: {
      "data-selected": isSelected,
    },
  });

  const { CollectionBranchRenderer } = useCollectionRenderer();

  return (
    <StyledRow
      {...mergeProps(rowProps, focusProps, renderProps)}
      {...filterDOMProps(props)}
      ref={ref}
      id={props.id}
    >
      <CollectionBranchRenderer collection={state.collection} parent={row} />
    </StyledRow>
  );
});
