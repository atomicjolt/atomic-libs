import { useContext } from "react";
import { filterDOMProps, mergeProps, useObjectRef } from "@react-aria/utils";
import { useTableRow, useTableSelectionCheckbox } from "@react-aria/table";
import { Collection, createBranchComponent } from "@react-aria/collections";
import { Node } from "react-stately";

import { DomProps, RenderStyleProps } from "../../../../types";
import { useFocusRing } from "@hooks/useFocusRing";
import { useRenderProps } from "@hooks/useRenderProps";
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";
import { DEFAULT_SLOT } from "@hooks/useSlottedContext";
import { CheckBox, CheckBoxContext } from "@components/Inputs/Checkbox";
import { TableStateContext } from "../Table.context";
import { StyledRow } from "../Table.styles";
import { TableCell } from "./TableCell";
import { useTableOptions } from "../hooks/useTableOptions";

export interface TableRowProps<T> extends RenderStyleProps<never>, DomProps {
  /** Callback when a user clicks on or otherwise interacts with the cell */
  onAction?: () => void;
  children?:
    | React.ReactNode
    | React.ReactNode[]
    | ((column: T) => React.ReactNode);
  columns?: T[];
  dependencies?: any[];
}

export const TableRow = createBranchComponent(
  "item",
  function TableRow<T extends object>(
    props: TableRowProps<T>,
    forwardedRef: React.ForwardedRef<HTMLTableRowElement>,
    row: Node<T>
  ) {
    const state = useContext(TableStateContext)!;
    const ref = useObjectRef(forwardedRef);
    const { rowProps, ...states } = useTableRow({ node: row }, state, ref);
    const { checkboxProps } = useTableSelectionCheckbox(
      { key: row.key },
      state
    );
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
          <CollectionBranchRenderer
            collection={state.collection}
            parent={row}
          />
        </StyledRow>
      </CheckBoxContext.Provider>
    );
  },
  (props) => (
    <Collection
      items={props.columns}
      idScope={props.id}
      dependencies={props.dependencies}
    >
      {props.children}
    </Collection>
  )
);

export function TableRowWrapper<T extends object>(props: TableRowProps<T>) {
  const { selectionMode } = useTableOptions();

  return (
    <TableRow {...props}>
      {["multiple", "single"].includes(selectionMode ?? "") && (
        <TableCell>
          <CheckBox slot="selection" />
        </TableCell>
      )}
      <Collection items={props.columns}>{props.children}</Collection>
    </TableRow>
  );
}
