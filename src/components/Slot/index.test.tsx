import { Slot } from "./index";
import { render, screen } from "@testing-library/react";

test("クラス名が子コンポーネントに追加される", () => {
  render(
    <Slot className="slot-class">
      <button className="child-class">子コンポーネント</button>
    </Slot>
  );
  expect(screen.getByRole("button", { name: "子コンポーネント" })).toHaveClass(
    "slot-class child-class"
  );
});
