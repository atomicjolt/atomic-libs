import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormatTable } from ".";

const columns = [
  { key: "name", title: "Name" },
  { key: "age", title: "Age" },
];

describe("FormatTable", () => {
  test("renders a labelled table of the rows", () => {
    render(
      <FormatTable
        aria-label="People"
        columns={columns}
        value={[{ key: 1, name: "Ada", age: 36 }]}
      />
    );
    expect(screen.getByRole("grid", { name: "People" })).toBeTruthy();
    expect(screen.getByText("Ada")).toBeTruthy();
  });

  test("renders the fallback when there is no value", () => {
    render(
      <FormatTable
        aria-label="People"
        columns={columns}
        value={null}
        fallback="No people"
      />
    );
    expect(screen.getByText("No people")).toBeTruthy();
    expect(screen.queryByRole("grid")).toBeNull();
  });
});

describe("FormatTable aria-details", () => {
  test("passes aria-details to the table", () => {
    render(
      <FormatTable
        aria-label="People"
        aria-details="people-notes"
        columns={columns}
        value={[{ key: 1, name: "Ada", age: 36 }]}
      />
    );
    expect(
      screen.getByRole("grid", { name: "People" }).getAttribute("aria-details")
    ).toBe("people-notes");
  });
});
