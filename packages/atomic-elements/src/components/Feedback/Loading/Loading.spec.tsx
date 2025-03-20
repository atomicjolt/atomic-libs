import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { Loading } from ".";

describe("Loading", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<Loading />);
      expect(res).toMatchSnapshot();
    });
  });
});
