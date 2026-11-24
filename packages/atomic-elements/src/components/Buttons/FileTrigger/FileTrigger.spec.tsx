import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { FileTrigger } from ".";
import { Button } from "../Button";

function fileInput(container: HTMLElement) {
  return container.querySelector<HTMLInputElement>('input[type="file"]')!;
}

describe("FileTrigger", () => {
  test("selects directories when accept is 'directories'", () => {
    const { container } = render(
      <FileTrigger accept="directories">
        <Button>Upload</Button>
      </FileTrigger>
    );
    expect(fileInput(container).hasAttribute("webkitdirectory")).toBe(true);
  });

  test("selects files by default", () => {
    const { container } = render(
      <FileTrigger>
        <Button>Upload</Button>
      </FileTrigger>
    );
    expect(fileInput(container).hasAttribute("webkitdirectory")).toBe(false);
  });
});
