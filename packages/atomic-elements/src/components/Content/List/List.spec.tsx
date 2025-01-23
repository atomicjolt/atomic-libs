import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { List } from ".";

describe("List", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(
        <List>
          <List.Item>Item 1</List.Item>
          <List.Item>Item 2</List.Item>
        </List>
      );
      expect(res).toMatchSnapshot();
    });
  });
});
