import { FONTS, FONT_OPTIONS, applyFontToDocument } from "./font";
import "@testing-library/jest-dom";

describe("Font functionality", () => {
  let originalDocument: Document;
  let originalLocalStorage: Storage;

  beforeEach(() => {
    originalDocument = document;
    originalLocalStorage = window.localStorage;

    Object.defineProperty(window, "document", {
      value: {
        documentElement: {
          className: "",
          style: {
            fontFamily: "",
          },
        },
        body: {
          classList: {
            remove: jest.fn(),
            add: jest.fn(),
          },
        },
      },
      writable: true,
    });

    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
      },
      writable: true,
    });
  });

  afterEach(() => {
    Object.defineProperty(window, "document", {
      value: originalDocument,
      writable: true,
    });
    Object.defineProperty(window, "localStorage", {
      value: originalLocalStorage,
      writable: true,
    });
  });

  it("should have valid font configurations", () => {
    FONT_OPTIONS.forEach((font) => {
      expect(font).toHaveProperty("id");
      expect(font).toHaveProperty("name");
      expect(font).toHaveProperty("font");
    });
  });

  it("should apply font to document", () => {
    const fontId = FONTS[0];
    applyFontToDocument(fontId);

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      "preferred-font",
      fontId
    );
    expect(document.body.classList.remove).toHaveBeenCalled();
    expect(document.body.classList.add).toHaveBeenCalledWith(fontId);
  });

  it("should handle font application errors gracefully", () => {
    const fontId = "invalid-font" as unknown;
    const consoleSpy = jest.spyOn(console, "error").mockImplementation();

    applyFontToDocument(fontId);

    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
