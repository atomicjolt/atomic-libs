import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Popover } from "@components/Overlays/Popover";
import { ListBox } from "@components/Dropdowns/ListBox";
import { MultiSelectField } from ".";

describe("MultiSelectField", () => {
  describe("matches snapshots", () => {
    test("when closed", () => {
      const result = render(
        <MultiSelectField>
          <MultiSelectField.Button>Open up</MultiSelectField.Button>
          <Popover>
            <ListBox>
              <ListBox.Item>Item 1</ListBox.Item>
              <ListBox.Item>Item 2</ListBox.Item>
              <ListBox.Item>Item 3</ListBox.Item>
            </ListBox>
          </Popover>
        </MultiSelectField>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("when open", () => {
      const result = render(
        <MultiSelectField isOpen>
          <MultiSelectField.Button>Open up</MultiSelectField.Button>
          <Popover>
            <ListBox>
              <ListBox.Item>Item 1</ListBox.Item>
              <ListBox.Item>Item 2</ListBox.Item>
              <ListBox.Item>Item 3</ListBox.Item>
            </ListBox>
          </Popover>
        </MultiSelectField>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });
  });
});
