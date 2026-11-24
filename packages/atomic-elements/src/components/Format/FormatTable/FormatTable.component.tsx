import { Table } from "@components/Content/Table";
import { FormatterProps } from "../Format.types";
import { Key } from "react-stately";
import { AriaLabelProps } from "../../../types";

type ValueRow = Record<Key, React.ReactNode> & { key: Key };

export interface FormatTableProps
  extends FormatterProps<ValueRow[]>,
    AriaLabelProps {
  /** Column definitions: `key` matches a field in each row, `title` is the header. */
  columns: { key: Key; title: string }[];
}

/** Renders rows of data as a table. */
export function FormatTable(props: FormatTableProps) {
  const {
    columns,
    value,
    fallback,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    "aria-describedby": ariaDescribedby,
  } = props;

  if (value === null || value === undefined) return <>{fallback}</>;

  return (
    <Table
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}>{column.title}</Table.Column>
        )}
      </Table.Header>
      <Table.Body items={value}>
        {(item) => (
          <Table.Row columns={columns}>
            {(column) => (
              <Table.Cell key={column.key}>{item[column.key]}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
