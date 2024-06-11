import { render } from "@testing-library/react";
import { describe, it, test } from "vitest";
import { Table } from ".";
import { TableProps } from "./Table.types";

const TestTable = (props: TableProps<any>) => {
  return (
    <Table aria-label="table" {...props}>
      <Table.Header>
        <Table.Column>Column 1</Table.Column>
        <Table.Column>Column 2</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Row 1, Cell 1</Table.Cell>
          <Table.Cell>Row 1, Cell 2</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Row 2, Cell 1</Table.Cell>
          <Table.Cell>Row 2, Cell 2</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

describe("Table", () => {
  it("should match the snapshot", () => {
    render(<TestTable />);
  });
});
