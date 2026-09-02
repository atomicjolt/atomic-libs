import { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Table } from ".";
import { TableProps, LoadingProps } from "./Table.types";
import { Button } from "@components/Buttons/Button";

const TestTable = (props: TableProps<any> & LoadingProps) => {
  return (
    <Table aria-label="table" {...props}>
      <Table.Header>
        <Table.Column id="a" allowsSearching isRowHeader>
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

  it("should render nested columns as grouped header rows", () => {
    const { container } = render(
      <Table aria-label="table">
        <Table.Header>
          <Table.Column title="Name">
            <Table.Column id="first" isRowHeader>
              First Name
            </Table.Column>
            <Table.Column id="last">Last Name</Table.Column>
          </Table.Column>
          <Table.Column id="age">Age</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Jane</Table.Cell>
            <Table.Cell>Doe</Table.Cell>
            <Table.Cell>30</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );

    const headerRows = container.querySelectorAll("thead tr");
    expect(headerRows).toHaveLength(2);

    const topRowCells = headerRows[0].querySelectorAll("th");
    expect(topRowCells[0]).toHaveTextContent("Name");
    expect(topRowCells[0]).toHaveAttribute("colspan", "2");

    const bottomRowCells = Array.from(headerRows[1].querySelectorAll("th"));
    expect(bottomRowCells.map((cell) => cell.textContent)).toEqual([
      "First Name",
      "Last Name",
      "Age",
    ]);
  });

  it(
    "should survive an unrelated sibling re-render without hanging",
    () => {
      // Regression test: buildHeaderRows used to mutate colSpan/nextKey/etc.
      // directly on the live column node objects shared with the collection's
      // own structural keyMap. That corrupted the tree on any re-render once
      // columns were nested, causing an unbounded loop.
      function Harness() {
        const [count, setCount] = useState(0);
        return (
          <div>
            <Button onPress={() => setCount((c) => c + 1)}>
              Count: {count}
            </Button>
            <Table aria-label="table">
              <Table.Header>
                <Table.Column title="Name">
                  <Table.Column id="first" isRowHeader>
                    First Name
                  </Table.Column>
                  <Table.Column id="last">Last Name</Table.Column>
                </Table.Column>
                <Table.Column id="age">Age</Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Jane</Table.Cell>
                  <Table.Cell>Doe</Table.Cell>
                  <Table.Cell>30</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        );
      }

      const { getByText } = render(<Harness />);
      const button = getByText(/Count:/);
      fireEvent.click(button);
      fireEvent.click(button);

      expect(getByText("Count: 2")).toBeTruthy();
    },
    10000
  );

  it("should renderEmpty when there is no rows", () => {
    render(
      <Table aria-label="Table">
        <Table.Header>
          <Table.Column id="a" isRowHeader>
            Column 1
          </Table.Column>
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
