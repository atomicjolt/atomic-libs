import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchField } from ".";
import { Label } from "../Atoms/Label";
import { Input } from "../Atoms/Input";
import { IconButton } from "../../Buttons/IconButton";
import { ComboInput } from "../ComboInput";

describe("SearchField clear slot", () => {
  test("a clear-slot button empties the field and calls onClear", () => {
    const onClear = vi.fn();
    render(
      <SearchField defaultValue="shoes" onClear={onClear}>
        <Label>Search</Label>
        <ComboInput>
          <Input />
          <IconButton slot="clear" icon="close" />
        </ComboInput>
      </SearchField>
    );
    const input = screen.getByRole("searchbox") as HTMLInputElement;
    expect(input.value).toBe("shoes");

    const clear = screen.getByRole("button", { name: "Clear search" });
    fireEvent.pointerDown(clear);
    fireEvent.pointerUp(clear);
    fireEvent.click(clear);

    expect(input.value).toBe("");
    expect(onClear).toHaveBeenCalled();
  });
});
