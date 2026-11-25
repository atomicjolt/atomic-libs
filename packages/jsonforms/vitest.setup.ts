import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(cleanup);

// react-aria popovers (selects, comboboxes, date pickers) measure with ResizeObserver.
window.ResizeObserver = vi.fn().mockImplementation(function () {
  return { observe: vi.fn(), unobserve: vi.fn(), disconnect: vi.fn() };
});
