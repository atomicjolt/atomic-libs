import { render, screen } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { CheckBox } from ".";

describe("CheckBox", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { asFragment } = render(<CheckBox />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("Rendering", () => {
    it("should render without crashing", () => {
      render(<CheckBox />);
      expect(screen.getByRole("checkbox")).toBeTruthy();
    });

    it("should render with required marker if isRequired is true", () => {
      render(<CheckBox isRequired />);
      expect(screen.getByText("*")).toBeTruthy();
    });

    it("should render with error message if isInvalid is true", () => {
      render(<CheckBox error="Error message" />);
      expect(screen.queryByText("Error message")).toBeFalsy();

      render(<CheckBox isInvalid error="Error message" />);
      expect(screen.getByText("Error message")).toBeTruthy();
    });

    it("should render with message if message prop is provided", () => {
      render(<CheckBox message="Help message" />);
      expect(screen.getByText("Help message")).toBeTruthy();
    });
  });

  describe("Behavior", () => {
    it("should toggle checkbox state on click", () => {
      render(<CheckBox />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).not.toBeChecked();
      checkbox.click();
      expect(checkbox).toBeChecked();
    });

    it("should be disabled if isDisabled is true", () => {
      render(<CheckBox isDisabled />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeDisabled();
    });

    it("should be readonly if isReadOnly is true", () => {
      render(<CheckBox isReadOnly />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("aria-readonly", "true");
    });

    it("Should not be toggle-able if isReadOnly is true", () => {
      render(<CheckBox isReadOnly />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).not.toBeChecked();
      checkbox.click();
      expect(checkbox).not.toBeChecked();
    });

    it("should be indeterminate if isIndeterminate is true", () => {
      render(<CheckBox isIndeterminate />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("aria-checked", "mixed");
      checkbox.click();
      expect(checkbox).toHaveAttribute("aria-checked", "mixed");
    });
  });
});
