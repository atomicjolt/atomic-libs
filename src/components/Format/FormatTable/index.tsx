import { Table } from "@components/Layout/Table";
import { FormatterProps } from "../Format.types";
import { Key } from "react-stately";

type ValueRow = Record<Key, React.ReactNode> & { key: Key };

export interface FormatTableProps extends FormatterProps<ValueRow[]> {
  columns: { key: Key; title: string }[];
}

export function FormatTable(props: FormatTableProps) {
  const { columns, value } = props;

  return (
    <Table>
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}>{column.title}</Table.Column>
        )}
      </Table.Header>
      <Table.Body items={value || []}>
        {(item) => (
          <Table.Row>
            {(colKey) => <Table.Cell key={colKey}>{item[colKey]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
