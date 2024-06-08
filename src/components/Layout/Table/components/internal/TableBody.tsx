import { useRef } from "react";
import { Expandable } from "@react-types/shared";
import { TableRowGroup } from "./TableRowGroup";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { useRenderProps } from "@/hooks/useRenderProps";
import { TableCheckboxCell } from "./TableCheckbox";
import { TableState, TreeGridState } from "../../Table.types";
import { StyledTBody } from "../../Table.styles";

interface TableBodyProps<T> extends Expandable {
  state: TableState<T> | TreeGridState<T>;
}

export function TableBody<T extends object>(props: TableBodyProps<T>) {
  const { state } = props;
  const { collection } = state;
  const ref = useRef(null);

  const rows = [...collection.body.childNodes];

  const renderProps = useRenderProps({
    componentClassName: "aje-table__body",
    ...collection.body.props,
  });

  return (
    <TableRowGroup type={StyledTBody} ref={ref} {...renderProps}>
      {rows.map((row) => {
        const hasChildRows =
          row?.props.childItems?.length > 0 ||
          row?.props?.children?.length >
            ((state as TreeGridState<T>).userColumnCount || 0);

        if (hasChildRows && !("keyMap" in state)) {
          throw new Error(
            "Rows cannot have child rows when `allowExpandableRows` is set to false."
          );
        }

        return (
          <TableRow item={row} state={state} key={row.key}>
            {[...collection.getChildren!(row.key)].map((cell) => {
              if (cell.props.isSelectionCell) {
                return (
                  <TableCheckboxCell key={cell.key} cell={cell} state={state} />
                );
              } else {
                return <TableCell key={cell.key} cell={cell} state={state} />;
              }
            })}
          </TableRow>
        );
      })}
    </TableRowGroup>
  );
}
