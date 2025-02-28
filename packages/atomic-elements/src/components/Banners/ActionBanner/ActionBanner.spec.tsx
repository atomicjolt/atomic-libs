import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ActionBanner } from "./ActionBanner.component";

describe("ActionBanner", () => {
  it("renders with default props", () => {
    render(
      <ActionBanner buttonText="Click me" onPress={() => {}}>
        Test Content
      </ActionBanner>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders with custom props", () => {
    render(
      <ActionBanner
        variant="warning"
        icon="warning"
        iconVariant="outlined"
        buttonVariant="primary"
        buttonText="Submit"
        onPress={() => {}}
        className="custom-class"
      >
        Custom Content
      </ActionBanner>
    );

    expect(screen.getByText("Custom Content")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("calls onPress when button is clicked", () => {
    const handlePress = vi.fn();
    render(
      <ActionBanner buttonText="Click me" onPress={handlePress}>
        Test Content
      </ActionBanner>
    );

    fireEvent.click(screen.getByText("Click me"));
    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
