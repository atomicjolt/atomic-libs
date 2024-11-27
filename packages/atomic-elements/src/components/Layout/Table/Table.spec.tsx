import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Table } from ".";
import { TableProps, LoadingProps } from "./Table.types";

const TestTable = (props: TableProps<any> & LoadingProps) => {
  return (
    <Table aria-label="table" {...props}>
      <Table.Header>
        <Table.Column id="a" allowsSearching>
          Column 1
        </Table.Column>
        <Table.Column id="b">Column 2</Table.Column>
      </Table.Header>
      <Table.Body isLoading={props.isLoading}>
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
  describe("Snapshots", () => {
    it("should match the snapshot", () => {
      const res = render(<TestTable />);

      expect(res).toMatchSnapshot();
    });

    it("Should match the snapshot when searchable", () => {
      const res = render(
        <TestTable searchDescriptor={{ column: "a", search: "search" }} />
      );

      expect(res).toMatchSnapshot();
    });

    it("should match the snapshot when in a loading state", () => {
      const res = render(<TestTable isLoading />);
      expect(res).toMatchSnapshot();
    });
  });

  it("should renderEmpty when there is no rows", () => {
    render(
      <Table aria-label="Table">
        <Table.Header>
          <Table.Column id="a">Column 1</Table.Column>
          <Table.Column id="b">Column 2</Table.Column>
        </Table.Header>
        <Table.Body items={[]} renderEmpty={() => "No data"}>
          {() => (
            <Table.Row>
              <Table.Cell>Cell 1</Table.Cell>
              <Table.Cell>Cell 2</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );

    expect(screen.getByText("No data")).toBeTruthy();
  });
});
