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

  describe("Accessibility", () => {
    it("is named by its label text", () => {
      render(<CheckBox message="Help">Accept terms</CheckBox>);
      expect(screen.getByRole("checkbox", { name: "Accept terms" })).toBeTruthy();
    });

    it("is described by its message and error", () => {
      render(
        <CheckBox message="Help" error="Bad" isInvalid>
          Accept terms
        </CheckBox>
      );
      expect(
        screen.getByRole("checkbox", { name: "Accept terms", description: "Help Bad" })
      ).toBeTruthy();
    });

    it("keeps an explicit aria-label", () => {
      render(<CheckBox aria-label="Explicit">Accept terms</CheckBox>);
      expect(screen.getByRole("checkbox", { name: "Explicit" })).toBeTruthy();
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

describe("CheckBox error message", () => {
  it("shows the error message when invalid", () => {
    render(
      <CheckBox isInvalid error="You must accept the terms">
        Accept
      </CheckBox>
    );
    expect(screen.getByText("You must accept the terms")).toBeTruthy();
  });

  it("shows no placeholder text when invalid without an error message", () => {
    render(<CheckBox isInvalid>Accept</CheckBox>);
    expect(screen.queryByText("error")).toBeNull();
  });
});
