import { HasChildren } from "@/types";
import { useTableRowGroup } from "react-aria";

interface TableRowGroupProps extends HasChildren {
  type: React.ElementType;
}

export function TableRowGroup(props: TableRowGroupProps) {
  const { type: Element, children } = props;
  const { rowGroupProps } = useTableRowGroup();

  return <Element {...rowGroupProps}>{children}</Element>;
}
