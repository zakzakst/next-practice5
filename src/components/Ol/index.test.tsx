import { Ol } from ".";
import { render, screen } from "@testing-library/react";

test("クラス名が反映される", () => {
  render(
    <Ol className="custom-class">
      <li>項目</li>
    </Ol>
  );
  expect(screen.getByRole("list")).toHaveClass("custom-class");
});
