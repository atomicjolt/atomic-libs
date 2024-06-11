import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ChipGroup } from ".";
import { Chip } from "../Chip";

describe("ChipGroup", () => {
  test("matches snapshot", () => {
    const result = render(
      <ChipGroup label="My Chip Group">
        <Chip>Item</Chip>
      </ChipGroup>
    );
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("renders label", () => {
    render(
      <ChipGroup label="My Chip Group">
        <Chip>Item</Chip>
      </ChipGroup>
    );
    expect(screen.getByText("My Chip Group")).not.toBeNull();
  });

  test("renders chips", () => {
    const chips = [
      { key: "1", rendered: "Chip 1" },
      { key: "2", rendered: "Chip 2" },
      { key: "3", rendered: "Chip 3" },
    ];
    render(
      <ChipGroup items={chips} label="Label">
        {({ key, rendered }) => <Chip key={key}>{rendered}</Chip>}
      </ChipGroup>
    );
    chips.forEach((chip) => {
      expect(screen.getByText(chip.rendered)).not.toBeNull();
    });
  });
});