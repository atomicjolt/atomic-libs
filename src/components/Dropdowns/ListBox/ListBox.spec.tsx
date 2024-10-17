import { describe, test, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { ListBox } from ".";
import { Item } from "@components/Collection";

describe("SelectField", () => {
  describe("matches snapshots", () => {
    test("when closed", () => {
      const result = render(
        <ListBox>
          <Item id="1">Item 1</Item>
          <Item id="2">Item 2</Item>
          <Item id="3">Item 3</Item>
        </ListBox>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });
  });
});
