import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { Flex } from ".";

describe("Flex", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<Flex />);
      expect(res).toMatchSnapshot();
    });
  });
});
