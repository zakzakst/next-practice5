import { Button } from "./index";
import { render, screen } from "@testing-library/react";

test("クラス名が反映される", () => {
  render(<Button className="custom-class">ボタン</Button>);
  expect(screen.getByRole("button", { name: "ボタン" })).toHaveClass(
    "custom-class"
  );
});

// TODO
// - refが挙動する
// - asChildが挙動する
// - aria-disabledが挙動する
// - variantのスタイルが反映される
// - sizeのスタイルが反映される
