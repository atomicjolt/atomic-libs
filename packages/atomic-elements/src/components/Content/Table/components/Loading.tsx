import { CellLoader, StyledCell, StyledRow } from "../Table.styles";
import { TableState, TreeGridState } from "../Table.types";

interface LoadingTableRowProps {
  state: TableState<any> | TreeGridState<any>;
  rows: number;
  /** Announced once, by the first skeleton cell. */
  label: string;
}

export function LoadingTableRows(props: LoadingTableRowProps) {
  const { state, rows, label } = props;
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
            <LoadingCellContent
              key={`${index}-${cellIndex}`}
              label={index === 0 && cellIndex === 0 ? label : undefined}
            />
          </StyledCell>
        );
      })}
    </StyledRow>
  ));
}

/** A skeleton cell. Unlabelled cells are hidden from screen readers, so the
 * loading state is announced once rather than once per cell. */
export function LoadingCellContent(props: { label?: string }) {
  const { label } = props;
  return (
    <CellLoader title={label} aria-hidden={label ? undefined : true}>
      <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
    </CellLoader>
  );
}
