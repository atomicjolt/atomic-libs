import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Button from ".";

test("button is clickable", () => {
  const onClick = jest.fn((e) => e);
  render(<Button onClick={onClick}>Click me</Button>);

  fireEvent.click(screen.getByText("Click me"));

  expect(onClick.mock.calls.length).toEqual(1);
});

test("Loading displays spinner", () => {
  const { rerender } = render(
    <Button loading={true} loadingComplete={false}>
      Click Me
    </Button>
  );

  expect(screen.getByTestId("spinner-svg")).toBeInTheDocument();

  rerender(
    <Button loading={true} loadingComplete={true}>
      Click Me
    </Button>
  );

  expect(screen.queryByTestId("spinner-svg")).not.toBeInTheDocument();
});
