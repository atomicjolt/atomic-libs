import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Popover } from "@components/Overlays/Popover";
import { ListBox } from "@components/Dropdowns/ListBox";
import { Item } from "@components/Collection";
import { Button } from "@components/Buttons/Button";
import { MultiSelectField } from ".";

describe("MultiSelectField", () => {
  describe("matches snapshots", () => {
    test("when closed", () => {
      const result = render(
        <MultiSelectField>
          <Button variant="dropdown">Open up</Button>
          <Popover>
            <ListBox>
              <Item>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
            </ListBox>
          </Popover>
        </MultiSelectField>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("when open", () => {
      const result = render(
        <MultiSelectField isOpen>
          <Button variant="dropdown">Open up</Button>
          <Popover>
            <ListBox>
              <Item>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
            </ListBox>
          </Popover>
        </MultiSelectField>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });
  });
});
