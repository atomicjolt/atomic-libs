import { describe, test, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { ListBox } from ".";

describe("SelectField", () => {
  describe("matches snapshots", () => {
    test("when closed", () => {
      const result = render(
        <ListBox>
          <ListBox.Item id="1">Item 1</ListBox.Item>
          <ListBox.Item id="2">Item 2</ListBox.Item>
          <ListBox.Item id="3">Item 3</ListBox.Item>
        </ListBox>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });
  });
});
