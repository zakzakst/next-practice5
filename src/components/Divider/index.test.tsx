import { Divider, dividerColorStyle } from ".";
import { render, screen } from "@testing-library/react";

describe("Divider", () => {
  test("デフォルトのスタイルが設定される", () => {
    render(<Divider />);
    expect(screen.getByRole("separator")).toHaveClass(
      dividerColorStyle["black"]
    );
  });

  test("クラス名が反映される", () => {
    render(<Divider className="custom-class" />);
    expect(screen.getByRole("separator")).toHaveClass("custom-class");
  });

  test("colorのスタイルが反映される", () => {
    render(<Divider color="gray-420" />);
    expect(screen.getByRole("separator")).not.toHaveClass(
      dividerColorStyle["black"]
    );
    expect(screen.getByRole("separator")).toHaveClass(
      dividerColorStyle["gray-420"]
    );
  });
});
