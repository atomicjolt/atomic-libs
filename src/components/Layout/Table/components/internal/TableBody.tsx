import React, { useRef } from "react";
import { Node, useTreeState } from "react-stately";
import { Expandable } from "@react-types/shared";
import { TableRowGroup } from "./TableRowGroup";
import { StyledTBody, StyledTd } from "../../Table.styles";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { TableCheckboxCell } from "./TableCheckbox";
import { IconButton } from "@/components/Buttons/IconButton";
import { ExtendedTableState } from "../../hooks/useExtendedTableState";
import { useRenderProps } from "@/hooks/useRenderProps";

interface TableBodyProps<T> extends Expandable {
  state: ExtendedTableState<T>;
}

export function TableBody<T extends object>(props: TableBodyProps<T>) {
  const { state } = props;
  const { collection } = state;
  const ref = useRef(null);

  const childNodes = [...collection.body.childNodes];
  const treeState = useTreeState({
    ...props,
    collection,
  });

  const renderProps = useRenderProps({
    componentClassName: "aje-table__body",
    ...collection.body.props,
  });

  return (
    <TableRowGroup type={StyledTBody} ref={ref} {...renderProps}>
      {childNodes.map((row) => (
        <TableBodyRow
          key={row.key}
          state={state}
          row={row}
          isExpanded={treeState.expandedKeys.has(row.key)}
          onToggleExpanded={() => treeState.toggleKey(row.key)}
        />
      ))}
    </TableRowGroup>
  );
}

interface TableBodyRowProps<T> {
  state: ExtendedTableState<T>;
  row: Node<T>;
  isExpanded?: boolean;
  onToggleExpanded?: () => void;
}

function TableBodyRow<T>(props: TableBodyRowProps<T>) {
  const { state, row, isExpanded, onToggleExpanded } = props;
  const { collection } = state;

  const childNodes = [...collection.getChildren!(row.key)];
  const childRows = childNodes.filter((node) => node.type === "item");

  return (
    <React.Fragment key={`group-${row.key}`}>
      <TableRow
        key={row.key}
        item={row}
        state={state}
        hasChildren={childRows.length > 0}
      >
        {childNodes.map((cell) => {
          if (cell.props.isSelectionCell) {
            return (
              <TableCheckboxCell key={cell.key} cell={cell} state={state} />
            );
          } else if (cell.props.isExpanderCell) {
            return (
              <StyledTd key={cell.key}>
                {childRows.length > 0 && (
                  <IconButton
                    variant="ghost"
                    icon={isExpanded ? "expand_more" : "chevron_right"}
                    aria-label="Expand group"
                    onPress={onToggleExpanded}
                  />
                )}
              </StyledTd>
            );
          } else if (cell.type === "cell") {
            return <TableCell key={cell.key} cell={cell} state={state} />;
          }
        })}
      </TableRow>

      {isExpanded &&
        childRows.map((node) => {
          const children = [...collection.getChildren!(node.key)];

          return (
            <TableRow key={node.key} item={node} state={state}>
              {children.map((cell) => {
                if (cell.props.isSelectionCell) {
                  return (
                    <TableCheckboxCell
                      key={cell.key}
                      cell={cell}
                      state={state}
                    />
                  );
                } else if (cell.props.isExpanderCell) {
                  return <StyledTd key={cell.key} />;
                } else if (cell.type === "cell") {
                  return <TableCell key={cell.key} cell={cell} state={state} />;
                }
              })}
            </TableRow>
          );
        })}
    </React.Fragment>
  );
}
