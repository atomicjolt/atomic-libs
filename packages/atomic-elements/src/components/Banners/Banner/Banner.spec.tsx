import { render, screen } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { Banner } from "./Banner.component";

describe("Banner", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<Banner />);
      expect(res).toMatchSnapshot();
    });

    it("should match snapshot with variant", () => {
      const res = render(<Banner variant="success" />);
      expect(res).toMatchSnapshot();
    });
  });

  it("should forward props to the element", () => {
    render(<Banner className="test" data-attribute data-testid="aje-banner" />);
    expect(screen.getByTestId("aje-banner")).toBeInTheDocument();
    expect(screen.getByTestId("aje-banner")).toHaveClass("test");
    expect(screen.getByTestId("aje-banner")).toHaveAttribute("data-attribute");
  });

  describe("Banner.Content", () => {
    it("should match snapshot", () => {
      const res = render(<Banner.Content>Content</Banner.Content>);
      expect(res).toMatchSnapshot();
    });
  });

  describe("Banner.IconButton", () => {
    it("should match snapshot", () => {
      const res = render(<Banner.IconButton icon="more_vert" />);
      expect(res).toMatchSnapshot();
    });
  });

  describe("Banner.Button", () => {
    it("should match snapshot", () => {
      const res = render(<Banner.Button>Button</Banner.Button>);
      expect(res).toMatchSnapshot();
    });
  });
});
