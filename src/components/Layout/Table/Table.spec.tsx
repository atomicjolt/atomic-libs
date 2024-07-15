import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Table } from ".";
import { TableProps } from "./Table.types";

const TestTable = (props: TableProps<any>) => {
  return (
    <Table aria-label="table" {...props}>
      <Table.Header>
        <Table.Column key="a" allowsSearching>
          Column 1
        </Table.Column>
        <Table.Column key="b">Column 2</Table.Column>
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

    it("should match the snapshot with pagination", () => {
      const res = render(
        <TestTable
          paginationDescriptor={{ page: 1, totalPages: 10, pageSize: 10 }}
        />
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
      <Table renderEmpty={() => "No data"}>
        <Table.Header>
          <Table.Column key="a">Column 1</Table.Column>
          <Table.Column key="b">Column 2</Table.Column>
        </Table.Header>
        <Table.Body items={[]}>
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
