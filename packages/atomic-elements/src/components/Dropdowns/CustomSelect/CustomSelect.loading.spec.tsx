import { describe, test, expect, vi, afterEach } from "vitest";
import { render, within } from "@testing-library/react";
import { CustomSelect } from ".";
import { MultiSelect } from "../MultiSelect";
import { Item } from "../../Collection";

afterEach(() => vi.restoreAllMocks());

describe("loading select fields", () => {
  for (const [name, Component] of [
    ["CustomSelect", CustomSelect],
    ["MultiSelect", MultiSelect],
  ] as const) {
    test(`${name} shows its loading state without warnings`, () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
      const { container } = render(
        <Component label="Fruit" isLoading loadingLabel="Loading options">
          <Item key="apple">Apple</Item>
        </Component>
      );
      within(container).getByRole("img", { name: "Loading options" });
      expect(container.textContent).toContain("Fruit");
      const pressWarnings = warn.mock.calls.filter((args) =>
        String(args[0]).includes("PressResponder")
      );
      expect(pressWarnings).toHaveLength(0);
    });
  }
});
