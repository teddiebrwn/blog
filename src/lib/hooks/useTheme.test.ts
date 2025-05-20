import { renderHook, act } from "@testing-library/react";
import { useTheme } from "./useTheme";

describe.only("useTheme", () => {
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

  it("should initialize with default theme when no stored theme", () => {
    mockLocalStorage.getItem.mockReturnValue(null);
    const { result } = renderHook(() => useTheme());
    expect(result.current.currentTheme.name).toBe("Default");
  });

  it("should initialize with stored theme", () => {
    mockLocalStorage.getItem.mockReturnValue("Sepia");
    const { result } = renderHook(() => useTheme());
    expect(result.current.currentTheme.name).toBe("Sepia");
  });

  it("should change theme and update localStorage", () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.setTheme("Carbon");
    });

    expect(result.current.currentTheme.name).toBe("Carbon");
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      "preferred-theme",
      "Carbon"
    );
  });

  it("should provide all available themes", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.themes).toHaveLength(4);
    expect(result.current.themes.map((t) => t.name)).toEqual([
      "Default",
      "Sepia",
      "Carbon",
      "Black",
    ]);
  });
});
