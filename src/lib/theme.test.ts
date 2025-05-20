import { THEMES, applyThemeToDocument } from "./theme";
import "@testing-library/jest-dom";

describe("Theme functionality", () => {
  let originalDocument: Document;

  beforeEach(() => {
    originalDocument = document;
    Object.defineProperty(global, "document", {
      value: {
        documentElement: {
          style: {
            setProperty: jest.fn(),
          },
        },
      },
      writable: true,
    });
  });

  afterEach(() => {
    Object.defineProperty(global, "document", {
      value: originalDocument,
      writable: true,
    });
  });

  it("should have valid theme configurations", () => {
    THEMES.forEach((theme) => {
      expect(theme).toHaveProperty("name");
      expect(theme).toHaveProperty("background");
      expect(theme).toHaveProperty("foreground");
      expect(theme).toHaveProperty("card");
      expect(theme).toHaveProperty("cardForeground");
      expect(theme).toHaveProperty("accent");
      expect(theme).toHaveProperty("accentForeground");
    });
  });

  it("should apply theme to document", () => {
    const theme = THEMES[0];
    applyThemeToDocument(theme);

    const setPropertyCalls = (
      document.documentElement.style.setProperty as jest.Mock
    ).mock.calls;
    expect(setPropertyCalls.length).toBeGreaterThan(0);

    const cssVariables = new Set(
      setPropertyCalls.map((call: string[]) => call[0])
    );
    expect(cssVariables).toContain("--background");
    expect(cssVariables).toContain("--foreground");
    expect(cssVariables).toContain("--card");
    expect(cssVariables).toContain("--card-foreground");
    expect(cssVariables).toContain("--accent");
    expect(cssVariables).toContain("--accent-foreground");
    expect(cssVariables).toContain("--reading-background");
    expect(cssVariables).toContain("--reading-foreground");
    expect(cssVariables).toContain("--reading-card");
    expect(cssVariables).toContain("--reading-card-foreground");
  });
});
