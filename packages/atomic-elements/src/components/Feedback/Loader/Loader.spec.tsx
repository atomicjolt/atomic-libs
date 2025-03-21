import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Loader } from ".";

describe("Loader", () => {
  describe("snapshots", () => {
    it("matches snapshot without children", () => {
      const res = render(<Loader />);
      expect(res.asFragment()).toMatchSnapshot();
    });

    it("matches snapshot with children", () => {
      const res = render(<Loader>Loading...</Loader>);
      expect(res.asFragment()).toMatchSnapshot();
    });
  });

  it("renders children when isLoading", () => {
    render(<Loader isLoading>Loading...</Loader>);
    expect(screen.getByText("Loading...")).toBeTruthy();
  });

  it("does not render children when not isLoading", () => {
    render(<Loader isLoading={false}>Loading...</Loader>);
    expect(screen.queryByText("Loading...")).toBeNull();
  });

  describe("Loading States", () => {
    it("Renders the children when loading", () => {
      render(<Loader isLoading>Loading...</Loader>);
      expect(screen.getByText("Loading...")).toBeTruthy();
    });

    it("Renders a check mark when not loading", () => {
      render(<Loader isLoading={false}>Loading...</Loader>);
      expect(screen.getByTestId("checkmark")).toBeTruthy();
    });

    it("Renders children in both state when children is a function", () => {
      render(
        <Loader isLoading={false}>
          {({ isLoading }) => (
            <div data-testid={isLoading ? "loading" : "not-loading"}>
              Loading...
            </div>
          )}
        </Loader>
      );

      expect(screen.getByTestId("not-loading")).toBeTruthy();

      render(
        <Loader isLoading>
          {({ isLoading }) => (
            <div data-testid={isLoading ? "loading" : "not-loading"}>
              Loading...
            </div>
          )}
        </Loader>
      );

      expect(screen.getByTestId("loading")).toBeTruthy();
    });
  });
});
