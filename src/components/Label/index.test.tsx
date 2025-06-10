import { Label, labelSizeStyle } from ".";
import { render, screen } from "@testing-library/react";

describe("Label", () => {
  test("デフォルトのスタイルが設定される", () => {
    render(<Label>ラベル</Label>);
    expect(screen.getByText("ラベル")).toHaveClass(labelSizeStyle["md"]);
  });

  test("クラス名が反映される", () => {
    render(<Label className="custom-class">ラベル</Label>);
    expect(screen.getByText("ラベル")).toHaveClass("custom-class");
  });

  test("sizeのスタイルが反映される", () => {
    render(<Label size="lg">ラベル</Label>);
    expect(screen.getByText("ラベル")).not.toHaveClass(labelSizeStyle["md"]);
    expect(screen.getByText("ラベル")).toHaveClass(labelSizeStyle["lg"]);
  });
});
