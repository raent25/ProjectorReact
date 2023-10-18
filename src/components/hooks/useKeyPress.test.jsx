import { describe, it, expect, vi } from "vitest";
import useKeyPress from "./useKeyPress.jsx";
import { renderHook } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";
describe("useKeyPress", () => {
  it("Press true key", async () => {
    const code = "Enter";
    const func = vi.fn();
    renderHook(() => useKeyPress(code, func));
    await userEvent.keyboard("{enter}");
    expect(func).toHaveBeenCalled();
  });
  it("Press false key", async () => {
    const code = "Enter";
    const func = vi.fn();
    renderHook(() => useKeyPress(code, func));
    await userEvent.keyboard("{space}");
    expect(func).not.toHaveBeenCalled();
  });
  it("Enter false value", async () => {
    const code = 12;
    const func = vi.fn();
    let error = null;
    try {
      renderHook(() => useKeyPress(code, func));
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
    expect(error.message).toMatch("Error code");
    expect(func).not.toHaveBeenCalled();
  });
});
