import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { BouncingDots } from ".";

describe("BouncingDots", () => {
  describe("snapshots", () => {
    it("matches snapshot", () => {
      const res = render(<BouncingDots />);
      expect(res.asFragment()).toMatchSnapshot();
    });

    it("matches props snapshot", () => {
      const { container } = render(
        <BouncingDots
          className="custom-class"
          style={{ color: "red" }}
          size="small"
          duration={1000}
          count={5}
          aria-label="Loading"
        />
      );

      expect(container).toMatchSnapshot();
    });
  });

  it("renders the correct number of dots", () => {
    const { container } = render(<BouncingDots count={5} />);
    const dots = container.querySelectorAll(".aje-bouncing-dots__dot");
    expect(dots.length).toBe(5);
  });
});
