import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { ProgressCircle } from ".";

describe("ProgressCircle", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<ProgressCircle />);
      expect(res).toMatchSnapshot();
    });
  });
});

describe("ProgressCircle DOM attributes", () => {
  it("doesn't write progress options onto the svg", () => {
    const { container } = render(
      <ProgressCircle
        label="Upload"
        valueLabel="Half"
        formatOptions={{ style: "percent" }}
        value={50}
      />
    );
    const svg = container.querySelector("svg")!;
    expect(svg.hasAttribute("label")).toBe(false);
    expect(svg.hasAttribute("valuelabel")).toBe(false);
    expect(svg.hasAttribute("formatoptions")).toBe(false);
  });

  it("keeps id and data attributes", () => {
    const { container } = render(
      <ProgressCircle aria-label="Upload" id="upload" data-testid="pc" />
    );
    const svg = container.querySelector("svg")!;
    expect(svg.id).toBe("upload");
    expect(svg.getAttribute("data-testid")).toBe("pc");
  });
});
