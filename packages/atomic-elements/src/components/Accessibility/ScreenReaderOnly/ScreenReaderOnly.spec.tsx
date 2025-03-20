import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { ScreenReaderOnly } from ".";

describe("ScreenReaderOnly", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<ScreenReaderOnly />);
      expect(res).toMatchSnapshot();
    });
  });
});
