import { useRef } from "react";
import { useTableHeaderRow } from "react-aria";
import { Node } from "react-stately";
import { HasChildren } from "../../../../../types";
import { useRenderProps } from "@hooks/useRenderProps";
import { TableState } from "../../Table.types";

interface TableHeaderRowProps<T> extends HasChildren {
  item: Node<T>;
  state: TableState<T>;
}

export function TableHeaderRow<T>(props: TableHeaderRowProps<T>) {
  const { item, children, state } = props;
  const ref = useRef(null);
  const { rowProps } = useTableHeaderRow({ node: item }, state, ref);

  const renderProps = useRenderProps({
    componentClassName: "aje-table__header__row",
    ...item.props,
  });

  return (
    <tr {...rowProps} {...renderProps} ref={ref}>
      {children}
    </tr>
  );
}
