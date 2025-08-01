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

    expect(screen.getByLabelText("My Chip Group")).not.toBeNull();
  });

  test("renders chips", () => {
    const chips = [
      { id: "1", rendered: "Chip 1" },
      { id: "2", rendered: "Chip 2" },
      { id: "3", rendered: "Chip 3" },
    ];
    render(
      <ChipGroup items={chips} label="Label">
        {({ rendered }) => <Chip>{rendered}</Chip>}
      </ChipGroup>
    );
    chips.forEach((chip) => {
      expect(screen.getByText(chip.rendered)).not.toBeNull();
    });
  });

  test("renders chips with href", () => {
    const chips = [
      { key: "1", rendered: "Chip 1", href: "/chip1" },
      { key: "2", rendered: "Chip 2", href: "/chip2" },
    ];
    render(
      <ChipGroup items={chips} label="Label">
        {({ key, rendered, href }) => (
          <Chip key={key} href={href}>
            {rendered}
          </Chip>
        )}
      </ChipGroup>
    );

    chips.forEach((chip) => {
      const link = screen.getByRole("row", { name: chip.rendered });
      expect(link).toHaveAttribute("href", chip.href);
    });
  });
});
