import { Link, linkStyleArr } from ".";
import { render, screen } from "@testing-library/react";

describe("Link", () => {
  test("クラス名が反映される", () => {
    render(
      <Link href="#" className="custom-class">
        リンク
      </Link>
    );
    expect(screen.getByRole("link", { name: "リンク" })).toHaveClass(
      "custom-class"
    );
  });

  test("target=_blankが設定されている場合、外部リンクアイコンが表示される", () => {
    render(
      <Link href="#" target="_blank">
        リンク
      </Link>
    );
    expect(screen.getByTestId("external-link-icon")).toBeInTheDocument();
  });

  test("asChildがtrueの場合、子要素のみが存在し、クラス名が統合される", () => {
    render(
      <Link className="link-class" asChild>
        <button className="child-class">ボタン</button>
      </Link>
    );
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    const buttonEl = screen.getByRole("button", { name: "ボタン" });
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveClass("link-class");
    expect(buttonEl).toHaveClass("child-class");
    expect(buttonEl).toHaveClass(linkStyleArr.join(" "));
  });
});
