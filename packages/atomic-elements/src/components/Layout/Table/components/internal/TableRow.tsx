import { useContext, useRef } from "react";
import { mergeProps, useObjectRef } from "@react-aria/utils";
import { useTableRow } from "@react-aria/table";
import { Node } from "react-stately";
import { createBranchComponent } from "@react-aria/collections";

import { HasChildren } from "../../../../../types";
import { useFocusRing } from "@hooks/useFocusRing";
import { useRenderProps } from "@hooks/useRenderProps";
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";
import { TableStateContext } from "../../Table.context";
import { StyledRow } from "../../Table.styles";

interface TableRowProps<T> extends HasChildren {}

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
    className: props.className,
    selectors: {
      "data-selected": isSelected,
    },
  });

  const { CollectionBranchRenderer } = useCollectionRenderer();

  return (
    <StyledRow
      {...mergeProps(rowProps, focusProps, renderProps)}
      ref={ref}
      id={props.id}
    >
      <CollectionBranchRenderer collection={state.collection} parent={row} />
    </StyledRow>
  );
});
