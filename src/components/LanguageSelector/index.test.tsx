import { LanguageSelector } from ".";
import { render, screen } from "@testing-library/react";

describe("LanguageSelector", () => {
  test("クラス名が反映される", () => {
    render(
      <LanguageSelector className="custom-class" data-testid="selector">
        言語選択
      </LanguageSelector>
    );
    expect(screen.getByTestId("selector")).toHaveClass("custom-class");
  });
});
