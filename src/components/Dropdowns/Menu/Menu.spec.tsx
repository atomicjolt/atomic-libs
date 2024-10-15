import { render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import { Menu } from ".";

describe("Menu", () => {
  it("renders correctly", () => {
    render(
      <Menu>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
      </Menu>
    );

    expect(screen.getByText("Item 1")).toBeTruthy();
    expect(screen.getByText("Item 2")).toBeTruthy();
    expect(screen.getByText("Item 3")).toBeTruthy();
  });

  it("calls onAction when any item is clicked", () => {
    const onAction = vitest.fn();

    render(
      <Menu onAction={onAction}>
        <Menu.Item id="1">Item 1</Menu.Item>
        <Menu.Item id="2">Item 2</Menu.Item>
        <Menu.Item id="3">Item 3</Menu.Item>
      </Menu>
    );

    screen.getByText("Item 1").click();
    expect(onAction).toHaveBeenCalledTimes(1);
    expect(onAction).toHaveBeenCalledWith("1");

    screen.getByText("Item 2").click();
    expect(onAction).toHaveBeenCalledTimes(2);

    screen.getByText("Item 3").click();
    expect(onAction).toHaveBeenCalledTimes(3);
  });

  it("calls onAction on specific items", () => {
    const onAction = vitest.fn();
    const firstOnAction = vitest.fn();
    const secondOnAction = vitest.fn();

    render(
      <Menu onAction={onAction}>
        <Menu.Item onAction={firstOnAction}>Item 1</Menu.Item>
        <Menu.Item onAction={secondOnAction}>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
      </Menu>
    );

    screen.getByText("Item 1").click();
    expect(firstOnAction).toHaveBeenCalledTimes(1);
    expect(secondOnAction).toHaveBeenCalledTimes(0);
    expect(onAction).toHaveBeenCalledTimes(1);

    screen.getByText("Item 2").click();
    expect(firstOnAction).toHaveBeenCalledTimes(1);
    expect(secondOnAction).toHaveBeenCalledTimes(1);
    expect(onAction).toHaveBeenCalledTimes(2);

    screen.getByText("Item 3").click();
    expect(firstOnAction).toHaveBeenCalledTimes(1);
    expect(secondOnAction).toHaveBeenCalledTimes(1);
    expect(onAction).toHaveBeenCalledTimes(3);
  });
});
