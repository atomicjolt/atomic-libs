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
        aria-label="Upload"
        valueLabel="Half"
        formatOptions={{ style: "percent" }}
        value={50}
      />
    );
    const svg = container.querySelector("svg")!;
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

describe("ProgressCircle labelling", () => {
  it("is named by aria-label", () => {
    const { getByRole } = render(
      <ProgressCircle aria-label="Uploading" value={40} />
    );
    expect(getByRole("progressbar", { name: "Uploading" })).toBeTruthy();
  });

  it("ignores a label prop instead of pointing at a missing element", () => {
    // label isn't in the props type; this covers untyped callers.
    const props = { label: "Uploading", value: 40 } as object;
    const { getByRole } = render(<ProgressCircle {...props} />);
    expect(getByRole("progressbar").hasAttribute("aria-labelledby")).toBe(
      false
    );
  });
});
