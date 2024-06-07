import { useRef } from "react";
import { mergeProps, useTableRow } from "react-aria";
import classNames from "classnames";
import { useFocusRing } from "@/hooks/useFocusRing";
import { HasChildren } from "../../../../../types";
import { Node, TableState } from "react-stately";
import { StyledRow } from "../../Table.styles";
import { useRenderProps } from "@/hooks/useRenderProps";

interface TableRowProps<T> extends HasChildren {
  item: Node<T>;
  state: TableState<T>;
  hasChildren?: boolean;
}

export function TableRow<T>(props: TableRowProps<T>) {
  const { item, children, state, hasChildren } = props;
  const ref = useRef(null);
  const isSelected = state.selectionManager.isSelected(item.key);
  const { rowProps } = useTableRow({ node: item }, state, ref);
  const { focusProps } = useFocusRing();

  const renderProps = useRenderProps({
    componentClassName: "aje-table__row",
    className: item.props.className,
    selectors: {
      "data-selected": isSelected,
      "data-has-children": hasChildren,
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
