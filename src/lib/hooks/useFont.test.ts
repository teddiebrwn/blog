import { renderHook, act } from "@testing-library/react";
import { useFont } from "./useFont";

describe("useFont", () => {
  const mockLocalStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
  };

  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: mockLocalStorage,
      writable: true,
    });
  });

  it("should initialize with default font when no stored font", () => {
    mockLocalStorage.getItem.mockReturnValue(null);
    const { result } = renderHook(() => useFont());
    expect(result.current.currentFont).toBe("font-inter");
  });

  it("should initialize with stored font", () => {
    mockLocalStorage.getItem.mockReturnValue("font-roboto");
    const { result } = renderHook(() => useFont());
    expect(result.current.currentFont).toBe("font-roboto");
  });

  it("should change font and update localStorage", () => {
    const { result } = renderHook(() => useFont());

    act(() => {
      result.current.setFont("font-merriweather");
    });

    expect(result.current.currentFont).toBe("font-merriweather");
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      "preferred-font",
      "font-merriweather"
    );
  });

  it("should provide all available font options", () => {
    const { result } = renderHook(() => useFont());
    expect(result.current.fontOptions).toHaveLength(10);
    expect(result.current.fontOptions.map((f) => f.id)).toEqual([
      "inter",
      "roboto",
      "open-sans",
      "merriweather",
      "lora",
      "garamond",
      "dm",
      "manrope",
      "playfair",
      "grotesk",
    ]);
  });
});
