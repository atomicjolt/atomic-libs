import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Popover } from "@components/Overlays/Popover";
import { ListBox } from "@components/Dropdowns/ListBox";
import { Item } from "@components/Collection";
import { SelectField } from ".";

describe("SelectField", () => {
  describe("matches snapshots", () => {
    test("when closed", () => {
      const result = render(
        <SelectField>
          <SelectField.Button>
            <SelectField.Value />
          </SelectField.Button>
          <Popover>
            <ListBox>
              <Item>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
            </ListBox>
          </Popover>
        </SelectField>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("when open", () => {
      const result = render(
        <SelectField isOpen>
          <SelectField.Button>
            <SelectField.Value />
          </SelectField.Button>
          <Popover>
            <ListBox>
              <Item>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
            </ListBox>
          </Popover>
        </SelectField>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });
  });
});
