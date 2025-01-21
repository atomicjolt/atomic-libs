import { CellLoader, StyledCell, StyledRow } from "../Table.styles";
import { TableState, TreeGridState } from "../Table.types";

interface LoadingTableRowProps {
  state: TableState<any> | TreeGridState<any>;
  rows: number;
}

export function LoadingTableRows(props: LoadingTableRowProps) {
  const { state, rows } = props;
  const { columns, columnCount } = state.collection;

  return Array.from({ length: rows }).map((_, index) => (
    <StyledRow key={index}>
      {Array.from({ length: columnCount }).map((_, cellIndex) => {
        const column = columns[cellIndex];
        return (
          <StyledCell
            key={`${index}-${cellIndex}`}
            data-divider={
              (column.props.showDivider && cellIndex !== columnCount - 1) ||
              undefined
            }
          >
            <LoadingCellContent key={`${index}-${cellIndex}`} />
          </StyledCell>
        );
      })}
    </StyledRow>
  ));
}

export function LoadingCellContent() {
  return (
    <CellLoader>
      <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
    </CellLoader>
  );
}
