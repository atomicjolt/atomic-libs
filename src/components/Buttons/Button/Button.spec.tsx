import React from "react";
import { describe, test, expect, vi } from "vitest";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Button from ".";

describe("matches snapshots", () => {
  test("normal display", () => {
    const result = render(<Button>Click Me</Button>);
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("changes variant", () => {
    const result = render(<Button variant="secondary">Click Me</Button>);
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("loading state", () => {
    const result2 = render(<Button isLoading>Click Me</Button>);
    expect(result2.asFragment()).toMatchSnapshot();
  });

  test("loading completed state", () => {
    const result2 = render(
      <Button isLoading loadingComplete={true}>
        Click Me
      </Button>
    );
    expect(result2.asFragment()).toMatchSnapshot();
  });
});

test("is clickable", () => {
  const onClick = vi.fn((e) => e);
  render(<Button onPress={onClick}>Click me</Button>);

  fireEvent.click(screen.getByText("Click me"));

  expect(onClick.mock.calls.length).toEqual(1);
});

test("displays loading displays spinner", () => {
  const { rerender } = render(
    <Button isLoading loadingComplete={false}>
      Click Me
    </Button>
  );

  expect(screen.getByTestId("spinner-svg")).not.toBeNull();

  rerender(
    <Button isLoading loadingComplete={true}>
      Click Me
    </Button>
  );

  expect(screen.queryByTestId("spinner-svg")).toBeNull();
});
