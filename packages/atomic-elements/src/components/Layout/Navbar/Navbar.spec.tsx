import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { Navbar } from ".";

describe("Navbar", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<Navbar />);
      expect(res).toMatchSnapshot();
    });
  });
});
