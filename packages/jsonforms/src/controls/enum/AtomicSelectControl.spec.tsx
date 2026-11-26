import type { JsonSchema } from "@jsonforms/core";
import { describe, expect, it } from "vitest";
import { screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { controlFor, renderForm } from "../../testing/renderForm";
import { renderCell } from "../../testing/renderCell";

const schema: JsonSchema = {
  type: "object",
  properties: {
    color: { type: "string", title: "Color", enum: ["red", "green", "blue"] },
    level: {
      title: "Level",
      oneOf: [
        { const: null, title: "None" },
        { const: 1, title: "Low" },
        { const: 2, title: "High" },
      ],
    },
  },
};

async function choose(name: string, option: string) {
  await userEvent.click(screen.getByRole("button", { name: new RegExp(name) }));
  await userEvent.click(within(await screen.findByRole("listbox")).getByRole("option", { name: option }));
}

describe("AtomicSelectControl", () => {
  it("selects an enum value", async () => {
    const form = renderForm(schema, { uischema: controlFor("color") });

    await choose("Color", "green");

    await waitFor(() => expect(form.latestData()).toEqual({ color: "green" }));
  });

  it("shows the current oneOf title and stores the const, including null", async () => {
    const form = renderForm(schema, { uischema: controlFor("level"), data: { level: 2 } });

    expect(screen.getByRole("button", { name: /Level/ })).toHaveTextContent("High");
    await choose("Level", "None");

    await waitFor(() => expect(form.latestData()).toEqual({ level: null }));
  });

  it("renders as a cell", async () => {
    const form = renderCell(schema, "color");

    await choose("Color", "blue");

    await waitFor(() => expect(form.latestData()).toEqual({ color: "blue" }));
  });
});

describe("AtomicRadioControl", () => {
  it.each(["color", "level"])("renders %s as radios for options.format radio", async (property) => {
    const form = renderForm(schema, { uischema: controlFor(property, { format: "radio" }) });

    const label = property === "color" ? "blue" : "Low";
    await userEvent.click(screen.getByRole("radio", { name: label }));

    await waitFor(() =>
      expect(form.latestData()).toEqual({ [property]: property === "color" ? "blue" : 1 }),
    );
  });
});

describe("AtomicComboBoxControl", () => {
  it("filters and selects for options.autocomplete", async () => {
    const form = renderForm(schema, { uischema: controlFor("color", { autocomplete: true }) });

    await userEvent.type(screen.getByRole("combobox", { name: "Color" }), "gr");
    await userEvent.click(await screen.findByRole("option", { name: "green" }));

    await waitFor(() => expect(form.latestData()).toEqual({ color: "green" }));
  });
});
