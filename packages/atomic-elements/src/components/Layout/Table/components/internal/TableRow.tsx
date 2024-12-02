import { useRef } from "react";
import { mergeProps } from "@react-aria/utils";
import { useTableRow } from "@react-aria/table";
import { Node, TableState } from "react-stately";

import { HasChildren } from "../../../../../types";
import { StyledRow } from "../../Table.styles";
import { useFocusRing } from "@hooks/useFocusRing";
import { useRenderProps } from "@hooks/useRenderProps";

interface TableRowProps<T> extends HasChildren {
  item: Node<T>;
  state: TableState<T>;
}

export function TableRow<T>(props: TableRowProps<T>) {
  const { item, children, state } = props;
  const ref = useRef(null);
  const isSelected = state.selectionManager.isSelected(item.key);
  const { rowProps } = useTableRow({ node: item }, state, ref);
  const { focusProps } = useFocusRing();

  const renderProps = useRenderProps({
    componentClassName: "aje-table__row",
    className: item.props.className,
    selectors: {
      "data-selected": isSelected,
    },
  });

  return (
    <StyledRow
      {...mergeProps(rowProps, focusProps, renderProps)}
      ref={ref}
      id={item.props.id}
    >
      {children}
    </StyledRow>
  );
}