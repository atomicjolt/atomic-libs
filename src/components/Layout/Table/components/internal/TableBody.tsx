import React, { useState } from "react";
import { TableRowGroup } from "./TableRowGroup";
import { StyledTBody, StyledTd } from "../../Table.styles";
import { TableState } from "react-stately";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { TableCheckboxCell } from "./TableCheckbox";
import IconButton from "@/components/Buttons/IconButton";
import { Key } from "@/types";

interface TableBodyProps<T> {
  state: TableState<T>;
}

export function TableBody<T>(props: TableBodyProps<T>) {
  const { state } = props;
  const { collection } = state;

  const [expandedKeys, setExpandedKeys] = useState<Key[]>([]);

  const toggleExpanded = (key: Key) => {
    setExpandedKeys((keys) =>
      keys.includes(key) ? keys.filter((k) => k !== key) : [...keys, key]
    );
  };

  return (
    <TableRowGroup type={StyledTBody}>
      {[...collection.body.childNodes].map((row) => {
        const childNodes = [...collection.getChildren!(row.key)];
        const childRows = childNodes.filter((node) => node.type === "item");
        const isExpanded = expandedKeys.includes(row.key);

        return (
          <React.Fragment key={`group-${row.key}`}>
            <TableRow key={row.key} item={row} state={state}>
              {childNodes.map((cell) => {
                if (cell.props.isSelectionCell) {
                  return (
                    <TableCheckboxCell
                      key={cell.key}
                      cell={cell}
                      state={state}
                    />
                  );
                } else if (cell.props.isExpanderCell) {
                  return (
                    <StyledTd key={cell.key}>
                      <IconButton
                        variant="ghost"
                        icon={isExpanded ? "expand_more" : "chevron_right"}
                        aria-label="Expand group"
                        onPress={() => toggleExpanded(row.key)}
                      />
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
                    <StyledTd></StyledTd>
                    {children.map((cell) => {
                      if (cell.props.isSelectionCell) {
                        return (
                          <TableCheckboxCell
                            key={cell.key}
                            cell={cell}
                            state={state}
                          />
                        );
                      } else if (cell.type === "cell") {
                        return (
                          <TableCell key={cell.key} cell={cell} state={state} />
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
          </React.Fragment>
        );
      })}
    </TableRowGroup>
  );
}
