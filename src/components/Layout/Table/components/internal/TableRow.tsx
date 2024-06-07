import { useRef } from "react";
import { mergeProps, useTableRow } from "react-aria";
import classNames from "classnames";
import { useFocusRing } from "@/hooks/useFocusRing";
import { HasChildren } from "@/types";
import { Node, TableState } from "react-stately";
import { StyledRow } from "../../Table.styles";

interface TableRowProps<T> extends HasChildren {
  item: Node<T>;
  state: TableState<T>;
}

export function TableRow<T>(props: TableRowProps<T>) {
  const { item, children, state } = props;
  const ref = useRef(null);
  const isSelected = state.selectionManager.isSelected(item.key);
  const { rowProps } = useTableRow({ node: item }, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <StyledRow
      {...mergeProps(rowProps, focusProps)}
      className={classNames({
        "is-selected": isSelected,
        "is-focused": isFocusVisible,
      })}
      ref={ref}
    >
      {children}
    </StyledRow>
  );
}
