import { Legend, legendSizeStyle } from ".";
import { render, screen } from "@testing-library/react";

describe("Legend", () => {
  test("デフォルトのスタイルが設定される", () => {
    render(<Legend>凡例</Legend>);
    expect(screen.getByText("凡例")).toHaveClass(legendSizeStyle["md"]);
  });

  test("クラス名が反映される", () => {
    render(<Legend className="custom-class">凡例</Legend>);
    expect(screen.getByText("凡例")).toHaveClass("custom-class");
  });

  test("sizeのスタイルが反映される", () => {
    render(<Legend size="lg">凡例</Legend>);
    expect(screen.getByText("凡例")).not.toHaveClass(legendSizeStyle["md"]);
    expect(screen.getByText("凡例")).toHaveClass(legendSizeStyle["lg"]);
  });
});
