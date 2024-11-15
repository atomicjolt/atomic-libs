import { describe, test, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ChipGroupField } from ".";
import { Chip } from "@components/Chips/Chip";
import { Label } from "../Atoms/Label";

describe("ChipGroupField", () => {
  const chips = [
    { id: "1", rendered: "Chip 1" },
    { id: "2", rendered: "Chip 2" },
    { id: "3", rendered: "Chip 3" },
  ];

  test("matches snapshot", () => {
    const result = render(
      <ChipGroupField>
        <ChipGroupField.List>
          <Chip>Item 1</Chip>
          <Chip>Item 2</Chip>
          <Chip>Item 3</Chip>
        </ChipGroupField.List>
      </ChipGroupField>
    );
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("renders label", () => {
    render(
      <ChipGroupField>
        <Label>My Chip Group</Label>
        <ChipGroupField.List>
          <Chip>Item 1</Chip>
          <Chip>Item 2</Chip>
          <Chip>Item 3</Chip>
        </ChipGroupField.List>
      </ChipGroupField>
    );

    expect(screen.getByText("My Chip Group")).not.toBeNull();
  });

  test("renders chips", () => {
    render(
      <ChipGroupField>
        <ChipGroupField.List items={chips}>
          {({ rendered }) => <Chip>{rendered}</Chip>}
        </ChipGroupField.List>
      </ChipGroupField>
    );

    chips.forEach((chip) => {
      expect(screen.getByText(chip.rendered)).not.toBeNull();
    });
  });

  test("onRemove", () => {
    const onRemove = vi.fn();

    render(
      <ChipGroupField onRemove={onRemove}>
        <ChipGroupField.List items={chips}>
          {({ rendered }) => <Chip>{rendered}</Chip>}
        </ChipGroupField.List>
      </ChipGroupField>
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toEqual(3);
    const button = buttons[0];
    fireEvent.click(button);

    expect(onRemove).toHaveBeenCalledOnce();
    expect(onRemove).toHaveBeenCalledWith(new Set(["1"]));
  });

  test("selection", () => {
    const onSelectionChange = vi.fn();

    render(
      <ChipGroupField
        selectionMode="multiple"
        onSelectionChange={onSelectionChange}
      >
        <ChipGroupField.List items={chips}>
          {({ rendered }) => <Chip>{rendered}</Chip>}
        </ChipGroupField.List>
      </ChipGroupField>
    );

    const rows = screen.getAllByRole("row");

    rows.forEach((row, index) => {
      fireEvent.focus(row);
      fireEvent.keyDown(row, { key: "Enter", code: "Enter", charCode: 13 });
      expect(onSelectionChange).toHaveBeenCalledTimes(index + 1);
    });
  });

  test("disabledKeys", () => {
    render(
      <ChipGroupField disabledKeys={["1", "2"]}>
        <ChipGroupField.List items={chips}>
          {({ rendered }) => <Chip>{rendered}</Chip>}
        </ChipGroupField.List>
      </ChipGroupField>
    );

    const rows = screen.getAllByRole("row");

    rows.forEach((row, index) => {
      if (index > 3) {
        expect(row.dataset["aria-disabled"]).toEqual("true");
      } else {
        expect(row.dataset["aria-disabled"]).toBeUndefined();
      }
    });
  });
});
