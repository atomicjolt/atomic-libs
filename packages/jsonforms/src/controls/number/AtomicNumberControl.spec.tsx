import { describe, expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { controlFor, renderForm } from "../../testing/renderForm";
import { renderCell } from "../../testing/renderCell";

const schema = {
  type: "object",
  properties: {
    price: { type: "number", title: "Price" },
    count: { type: "integer", title: "Count", minimum: 0 },
  },
} as const;

describe("AtomicNumberControl", () => {
  it("renders the value", () => {
    renderForm(schema, { uischema: controlFor("price"), data: { price: 2.5 } });
    expect(screen.getByRole("textbox", { name: "Price" })).toHaveValue("2.5");
  });

  it("stores the typed number on blur", async () => {
    const form = renderForm(schema, { uischema: controlFor("price") });

    await userEvent.type(screen.getByRole("textbox", { name: "Price" }), "12.75");
    await userEvent.tab();

    await waitFor(() => expect(form.latestData()).toEqual({ price: 12.75 }));
  });

  it("doesn't accept a decimal point for integers", async () => {
    const form = renderForm(schema, { uischema: controlFor("count") });

    await userEvent.type(screen.getByRole("textbox", { name: "Count" }), "3.7");
    await userEvent.tab();

    await waitFor(() => expect(form.latestData()).toEqual({ count: 37 }));
  });

  it("shows a stored non-integer rounded for integer fields", () => {
    renderForm(schema, { uischema: controlFor("count"), data: { count: 3.7 } });
    expect(screen.getByRole("textbox", { name: "Count" })).toHaveValue("4");
  });

  it("stores undefined when cleared", async () => {
    const form = renderForm(schema, { uischema: controlFor("price"), data: { price: 5 } });

    await userEvent.clear(screen.getByRole("textbox", { name: "Price" }));
    await userEvent.tab();

    await waitFor(() => expect(form.latestData()).toEqual({ price: undefined }));
  });

  it("is read-only in a readonly form", () => {
    renderForm(schema, { uischema: controlFor("price"), data: { price: 1 }, readonly: true });
    expect(screen.getByRole("textbox", { name: "Price" })).toHaveAttribute("readonly");
  });

  it("renders as a cell, named by the schema title", () => {
    renderCell(schema, "price", { data: { price: 3 } });
    expect(screen.getByRole("textbox", { name: "Price" })).toHaveValue("3");
    expect(screen.queryByText("Price")).not.toBeInTheDocument();
  });
});
