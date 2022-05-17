import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Button from ".";

describe("matches snapshots", () => {
  test("normal display", () => {
    const result = render(<Button>Click Me</Button>);
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("changes className", () => {
    const result = render(<Button className="secondary">Click Me</Button>);
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("loading state", () => {
    const result2 = render(<Button loading={true}>Click Me</Button>);
    expect(result2.asFragment()).toMatchSnapshot();
  });

  test("loading completed state", () => {
    const result2 = render(
      <Button loading={true} loadingComplete={true}>
        Click Me
      </Button>
    );
    expect(result2.asFragment()).toMatchSnapshot();
  });
});

it("is clickable", () => {
  const onClick = jest.fn((e) => e);
  render(<Button onClick={onClick}>Click me</Button>);

  fireEvent.click(screen.getByText("Click me"));

  expect(onClick.mock.calls.length).toEqual(1);
});

it("displays loading displays spinner", () => {
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
