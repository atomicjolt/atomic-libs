import { render, screen, fireEvent } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { Disclosure, DisclosureGroup } from ".";

describe("Disclosure", () => {
  describe("Single Disclosure", () => {
    it("matches snapshot", () => {
      const { asFragment } = render(
        <Disclosure>
          <Disclosure.Trigger>Toggle</Disclosure.Trigger>
          <Disclosure.Panel>Content</Disclosure.Panel>
        </Disclosure>
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it("renders collapsed by default", () => {
      render(
        <Disclosure>
          <Disclosure.Trigger>Toggle</Disclosure.Trigger>
          <Disclosure.Panel>Content</Disclosure.Panel>
        </Disclosure>
      );

      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-expanded",
        "false"
      );
      expect(screen.queryByText("Content")).not.toBeVisible();
    });

    it("expands/collapses when clicked", () => {
      render(
        <Disclosure>
          <Disclosure.Trigger>Toggle</Disclosure.Trigger>
          <Disclosure.Panel>Content</Disclosure.Panel>
        </Disclosure>
      );

      const trigger = screen.getByRole("button");
      fireEvent.click(trigger);

      expect(trigger).toHaveAttribute("aria-expanded", "true");
      expect(screen.getByText("Content")).toBeVisible();

      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute("aria-expanded", "false");
      expect(screen.queryByText("Content")).not.toBeVisible();
    });

    it("respects disabled state", () => {
      render(
        <Disclosure isDisabled>
          <Disclosure.Trigger>Toggle</Disclosure.Trigger>
          <Disclosure.Panel>Content</Disclosure.Panel>
        </Disclosure>
      );

      const trigger = screen.getByRole("button");
      expect(trigger).toBeDisabled();
      fireEvent.click(trigger);
      expect(screen.queryByText("Content")).not.toBeVisible();
    });
  });

  describe("DisclosureGroup", () => {
    it("allows only one panel open at a time by default", () => {
      render(
        <DisclosureGroup>
          <Disclosure>
            <Disclosure.Trigger>First</Disclosure.Trigger>
            <Disclosure.Panel>Content 1</Disclosure.Panel>
          </Disclosure>
          <Disclosure>
            <Disclosure.Trigger>Second</Disclosure.Trigger>
            <Disclosure.Panel>Content 2</Disclosure.Panel>
          </Disclosure>
        </DisclosureGroup>
      );

      const [first, second] = screen.getAllByRole("button");

      fireEvent.click(first);
      expect(screen.getByText("Content 1")).toBeVisible();
      expect(screen.queryByText("Content 2")).not.toBeVisible();

      fireEvent.click(second);
      expect(screen.queryByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 2")).toBeVisible();
    });

    it("supports multiple expanded panels when allowMultiple is true", () => {
      render(
        <DisclosureGroup allowsMultipleExpanded>
          <Disclosure>
            <Disclosure.Trigger>First</Disclosure.Trigger>
            <Disclosure.Panel>Content 1</Disclosure.Panel>
          </Disclosure>
          <Disclosure>
            <Disclosure.Trigger>Second</Disclosure.Trigger>
            <Disclosure.Panel>Content 2</Disclosure.Panel>
          </Disclosure>
        </DisclosureGroup>
      );

      const [first, second] = screen.getAllByRole("button");

      fireEvent.click(first);
      fireEvent.click(second);

      expect(screen.getByText("Content 1")).toBeVisible();
      expect(screen.getByText("Content 2")).toBeVisible();
    });
  });

  describe("Custom Icons", () => {
    it("renders custom icons when provided", () => {
      render(
        <Disclosure>
          <Disclosure.Trigger icons={{ expanded: "remove", collapsed: "add" }}>
            Toggle
          </Disclosure.Trigger>
          <Disclosure.Panel>Content</Disclosure.Panel>
        </Disclosure>
      );

      const icon = screen.getByText("add");
      expect(icon).toBeInTheDocument();

      fireEvent.click(screen.getByRole("button"));
      expect(screen.getByText("remove")).toBeInTheDocument();
    });
  });
});
