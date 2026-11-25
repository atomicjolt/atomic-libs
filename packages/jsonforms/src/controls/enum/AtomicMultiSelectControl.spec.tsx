import type { JsonSchema } from "@jsonforms/core";
import { describe, expect, it } from "vitest";
import { screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { controlFor, renderForm } from "../../testing/renderForm";

const schema: JsonSchema = {
  type: "object",
  properties: {
    tags: {
      type: "array",
      title: "Tags",
      uniqueItems: true,
      items: { type: "string", enum: ["news", "travel", "gaming"] },
    },
  },
};

describe("AtomicMultiSelectControl", () => {
  it("adds and removes values", async () => {
    const form = renderForm(schema, { uischema: controlFor("tags"), data: { tags: ["news"] } });

    await userEvent.click(screen.getByRole("button", { name: /Tags/ }));
    const listbox = await screen.findByRole("listbox");
    await userEvent.click(within(listbox).getByRole("option", { name: "gaming" }));
    await waitFor(() => expect(form.latestData()).toEqual({ tags: ["news", "gaming"] }));

    await userEvent.click(within(listbox).getByRole("option", { name: "news" }));
    await userEvent.click(within(listbox).getByRole("option", { name: "gaming" }));
    await waitFor(() => expect(form.latestData()).toEqual({ tags: undefined }));
  });
});
