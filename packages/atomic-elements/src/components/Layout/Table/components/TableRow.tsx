import { useContext } from "react";
import { filterDOMProps, mergeProps, useObjectRef } from "@react-aria/utils";
import { useTableRow, useTableSelectionCheckbox } from "@react-aria/table";
import { createBranchComponent } from "@react-aria/collections";
import { Node } from "react-stately";

import { DomProps, RenderBaseProps } from "../../../../types";
import { useFocusRing } from "@hooks/useFocusRing";
import { useRenderProps } from "@hooks/useRenderProps";
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";
import { DEFAULT_SLOT } from "@hooks/useSlottedContext";
import { TableStateContext } from "../Table.context";
import { StyledRow } from "../Table.styles";
import { CheckBoxContext } from "@components/Inputs/Checkbox";

export interface TableRowProps<T> extends RenderBaseProps<never>, DomProps {
  /** Callback when a user clicks on or otherwise interacts with the cell */
  onAction?: () => void;
}

export const TableRow = createBranchComponent("item", function TableRow<
  T extends object
>(props: TableRowProps<T>, forwardedRef: React.ForwardedRef<HTMLTableRowElement>, row: Node<T>) {
  const state = useContext(TableStateContext)!;
  const ref = useObjectRef(forwardedRef);
  const { rowProps, ...states } = useTableRow({ node: row }, state, ref);
  const { checkboxProps } = useTableSelectionCheckbox({ key: row.key }, state);
  const { focusProps } = useFocusRing();

  const renderProps = useRenderProps({
    componentClassName: "aje-table__row",
    ...props,
    selectors: {
      "data-selected": states.isSelected,
    },
  });

  const { CollectionBranchRenderer } = useCollectionRenderer();

  return (
    <CheckBoxContext.Provider
      value={{
        slots: {
          [DEFAULT_SLOT]: {},
          selection: checkboxProps,
        },
      }}
    >
      <StyledRow
        {...mergeProps(rowProps, focusProps, renderProps)}
        {...filterDOMProps(props)}
        ref={ref}
        id={props.id}
      >
        <CollectionBranchRenderer collection={state.collection} parent={row} />
      </StyledRow>
    </CheckBoxContext.Provider>
  );
});
