import { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
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

  it("keeps grouped header rows aligned with their leaf columns when a nested sub-group is toggled", () => {
    // Regression test for #267: buildHeaderRows names each placeholder
    // after whichever real column borders it (the next column for a
    // mid-row gap, the last-placed column for a trailing one) rather than
    // by its own position. A column with a gap on both sides - here,
    // "Milestones" sits between the gap left by "Lead" and the gap left by
    // "Owner" - gets two placeholders sharing that one name. Without a
    // position-based key (see TableHeaderRowCells in TableHeader.tsx), React
    // can't tell the two placeholders apart, so a stale cell survives every
    // toggle and the header row above them keeps growing wider than the
    // columns underneath it instead of tracking the current leaf count.
    function Harness() {
      const [nested, setNested] = useState(true);
      return (
        <div>
          <Button onPress={() => setNested((value) => !value)}>Toggle</Button>
          <Table aria-label="table">
            <Table.Header>
              <Table.Column title="Team">
                <Table.Column title="Location">
                  <Table.Column id="city" isRowHeader>
                    City
                  </Table.Column>
                  <Table.Column id="state">State</Table.Column>
                </Table.Column>
                <Table.Column id="lead">Lead</Table.Column>
              </Table.Column>
              <Table.Column title="Project">
                {nested ? (
                  <Table.Column title="Milestones">
                    <Table.Column id="m1">M1</Table.Column>
                    <Table.Column id="m2">M2</Table.Column>
                  </Table.Column>
                ) : (
                  <Table.Column id="m1">M1</Table.Column>
                )}
                <Table.Column id="owner">Owner</Table.Column>
              </Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Austin</Table.Cell>
                <Table.Cell>TX</Table.Cell>
                <Table.Cell>Jane</Table.Cell>
                <Table.Cell>Kickoff</Table.Cell>
                {nested && <Table.Cell>Beta</Table.Cell>}
                <Table.Cell>Priya</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      );
    }

    const { container, getByText } = render(<Harness />);
    const button = getByText("Toggle");

    function headerRowWidths() {
      return Array.from(container.querySelectorAll("thead tr")).map((row) =>
        Array.from(row.querySelectorAll("th")).reduce(
          (sum, th) => sum + Number(th.getAttribute("colspan") || 1),
          0
        )
      );
    }

    // Starts nested (6 leaves); each click flips between 5 leaves
    // (collapsed) and 6 (nested). Every header row should always sum to
    // whichever is current - never more, and never a leftover from before.
    for (let i = 0; i < 6; i++) {
      fireEvent.click(button);
      const expectedWidth = i % 2 === 0 ? 5 : 6;
      headerRowWidths().forEach((width) => expect(width).toBe(expectedWidth));
    }
  });

  it("does not emit a duplicate-key warning for a column with placeholder gaps on both sides", () => {
    // The duplicate placeholder key from #267 isn't toggle-induced - it's a
    // property of the row's shape, present from the very first render.
    const errors: unknown[][] = [];
    const spy = vi.spyOn(console, "error").mockImplementation((...args) => {
      errors.push(args);
    });

    render(
      <Table aria-label="table">
        <Table.Header>
          <Table.Column title="Team">
            <Table.Column title="Location">
              <Table.Column id="city" isRowHeader>
                City
              </Table.Column>
              <Table.Column id="state">State</Table.Column>
            </Table.Column>
            <Table.Column id="lead">Lead</Table.Column>
          </Table.Column>
          <Table.Column title="Project">
            <Table.Column title="Milestones">
              <Table.Column id="m1">M1</Table.Column>
              <Table.Column id="m2">M2</Table.Column>
            </Table.Column>
            <Table.Column id="owner">Owner</Table.Column>
          </Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Austin</Table.Cell>
            <Table.Cell>TX</Table.Cell>
            <Table.Cell>Jane</Table.Cell>
            <Table.Cell>Kickoff</Table.Cell>
            <Table.Cell>Beta</Table.Cell>
            <Table.Cell>Priya</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );

    spy.mockRestore();

    const keyWarnings = errors.filter((args) =>
      args.some((arg) => typeof arg === "string" && /same key/i.test(arg))
    );
    expect(keyWarnings).toHaveLength(0);
  });

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
