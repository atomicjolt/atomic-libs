import { expect, test, describe, afterEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { makeStorageHook } from "../src";

class MockedStorage {
  data: Record<string, string>;

  constructor() {
    this.data = {};
  }

  getItem = (key: string) => {
    if (key in this.data) {
      return this.data[key];
    }
    return null;
  };

  setItem = (key: string, value: string) => {
    this.data[key] = value;
  };

  removeItem = (key: string) => {
    delete this.data[key];
  };

  clear = () => {
    this.data = {};
  };
}

describe("Web Storage hooks", () => {
  const storage = new MockedStorage();
  const useStorage = makeStorageHook(storage);

  afterEach(storage.clear);

  test("should set a value in storage", () => {
    storage.clear();
    const { result } = renderHook(() => useStorage("key", 1));

    expect(result.current[0]).toEqual(1);

    act(() => result.current[1](2));
    expect(storage.getItem("key")).toEqual("2");
  });

  test("should use cached value", () => {
    storage.setItem("key", "2");
    const { result } = renderHook(() => useStorage("key", 1));

    expect(result.current[0]).toEqual(2);

    act(() => result.current[1](1));
    expect(storage.getItem("key")).toEqual("1");
  });

  test("prepare and parse options", () => {
    const prepare = vi.fn((value: number) => {
      return value.toString();
    });

    const parse = vi.fn((value: string | null) => {
      if (value === null) {
        return 0;
      }

      return parseInt(value, 10);
    });

    const myUseStorage = makeStorageHook(storage, {
      prepare,
      parse,
    });

    storage.setItem("key", "1");
    const { result } = renderHook(() => myUseStorage<number>("key", 1));

    expect(prepare.mock.calls.length).toEqual(0);
    expect(parse.mock.calls.length).toEqual(1);

    act(() => result.current[1](2));
    expect(prepare.mock.calls.length).toEqual(1);
    expect(storage.getItem("key")).toEqual("2");
  });

  test("prefix option", () => {
    const myUseStorage = makeStorageHook(storage, {
      prefix: "myPrefix-",
    });

    const { result } = renderHook(() => myUseStorage("key", 1));
    act(() => result.current[1](1));

    expect(storage.getItem("myPrefix-key")).toEqual("1");
  });
});
