import { describe, test, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Table } from ".";

afterEach(() => vi.restoreAllMocks());

describe("Table.Skeleton", () => {
  test("uses the aria-label it is given", () => {
    render(
      <Table.Skeleton columns={2} rows={1} aria-label="Loading students" />
    );
    expect(screen.getByRole("grid", { name: "Loading students" })).toBeTruthy();
  });

  test("has a default label and doesn't warn without one", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    render(<Table.Skeleton columns={2} rows={1} />);
    expect(screen.getByRole("grid").getAttribute("aria-label")).toBeTruthy();
    expect(
      warn.mock.calls.filter((c) => String(c[0]).includes("aria-label"))
    ).toHaveLength(0);
  });
});
