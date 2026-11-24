import { describe, test, expect } from "vitest";
import { render, within } from "@testing-library/react";
import { TextField } from "../TextField";
import { SearchField } from "../SearchField";
import { NumberField } from "../NumberField";
import { ComboBoxField } from "../ComboBoxField";
import { Label } from "../Atoms/Label";
import { Input } from "../Atoms/Input";

/** A loading Input renders a labelled placeholder image instead of an <input>. */
function expectLoadingInput(container: HTMLElement) {
  // Ignore react-aria's hidden <template>, used to build collections.
  const visibleInputs = [...container.querySelectorAll("input")].filter(
    (input) => !input.closest("template")
  );
  expect(visibleInputs).toHaveLength(0);
  within(container).getByRole("img", { name: "Loading field" });
}

describe("fields pass their loading state to the input", () => {
  test("TextField", () => {
    const { container } = render(
      <TextField isLoading loadingLabel="Loading field">
        <Label>Name</Label>
        <Input />
      </TextField>
    );
    expectLoadingInput(container);
  });

  test("SearchField", () => {
    const { container } = render(
      <SearchField isLoading loadingLabel="Loading field">
        <Label>Search</Label>
        <Input />
      </SearchField>
    );
    expectLoadingInput(container);
  });

  test("NumberField", () => {
    const { container } = render(
      <NumberField isLoading loadingLabel="Loading field">
        <Label>Amount</Label>
        <Input />
      </NumberField>
    );
    expectLoadingInput(container);
  });

  test("ComboBoxField", () => {
    const { container } = render(
      <ComboBoxField isLoading loadingLabel="Loading field">
        <Label>Fruit</Label>
        <Input />
      </ComboBoxField>
    );
    expectLoadingInput(container);
  });
});
