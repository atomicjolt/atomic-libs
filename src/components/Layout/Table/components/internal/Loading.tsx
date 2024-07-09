import { CellLoader, StyledCell, StyledRow } from "../../Table.styles";

interface LoadingTableRowProps {
  columns: number;
  rows: number;
}

export function LoadingTableRows(props: LoadingTableRowProps) {
  const { columns, rows } = props;

  return Array.from({ length: rows }).map((_, index) => (
    <StyledRow key={index}>
      {Array.from({ length: columns }).map((_, cellIndex) => (
        <StyledCell>
          <LoadingCellContent key={`${index}-${cellIndex}`} />
        </StyledCell>
      ))}
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
