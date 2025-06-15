import { HamburgerMenuButton } from ".";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";

describe("HamburgerMenuButton", () => {
  test("クラス名が反映される", () => {
    render(
      <HamburgerMenuButton className="custom-class">ボタン</HamburgerMenuButton>
    );
    expect(screen.getByRole("button", { name: "ボタン" })).toHaveClass(
      "custom-class"
    );
  });

  test("refで要素を参照できる", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<HamburgerMenuButton ref={ref}>ボタン</HamburgerMenuButton>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
