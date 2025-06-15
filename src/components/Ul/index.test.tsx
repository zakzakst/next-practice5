import { Ul } from ".";
import { render, screen } from "@testing-library/react";

test("クラス名が反映される", () => {
  render(
    <Ul className="custom-class">
      <li>項目</li>
    </Ul>
  );
  expect(screen.getByRole("list")).toHaveClass("custom-class");
});
