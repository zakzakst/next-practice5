import {
  Button,
  buttonBaseStyle,
  buttonVariantStyle,
  buttonSizeStyle,
} from ".";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";
// import userEvent from "@testing-library/user-event";

describe("Button", () => {
  test("デフォルトのスタイルが設定される", () => {
    render(<Button>ボタン</Button>);
    const buttonEl = screen.getByRole("button", { name: "ボタン" });
    expect(buttonEl).toHaveClass(buttonBaseStyle);
    expect(buttonEl).toHaveClass(buttonVariantStyle["solid-fill"]);
    expect(buttonEl).toHaveClass(buttonSizeStyle["md"]);
  });

  test("クラス名が反映される", () => {
    render(<Button className="custom-class">ボタン</Button>);
    expect(screen.getByRole("button", { name: "ボタン" })).toHaveClass(
      "custom-class"
    );
  });

  test("asChildがtrueの場合、子要素のみが存在し、クラス名が統合される", () => {
    render(
      <Button className="button-class" asChild>
        <a href="#" className="child-class">
          リンク
        </a>
      </Button>
    );
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    const linkEl = screen.getByRole("link", { name: "リンク" });
    expect(linkEl).toBeInTheDocument();
    expect(linkEl).toHaveClass("button-class");
    expect(linkEl).toHaveClass("child-class");
    expect(linkEl).toHaveClass(buttonBaseStyle);
  });

  test("variantのスタイルが反映される", () => {
    render(<Button variant="outline">ボタン</Button>);
    expect(screen.getByRole("button", { name: "ボタン" })).toHaveClass(
      buttonVariantStyle["outline"]
    );
  });

  test("sizeのスタイルが反映される", () => {
    render(<Button size="lg">ボタン</Button>);
    expect(screen.getByRole("button", { name: "ボタン" })).toHaveClass(
      buttonSizeStyle["lg"]
    );
  });

  test("refで要素を参照できる", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>ボタン</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  // test("aria-disabledがtrueの場合、onClickが実行されない", async () => {
  //   const user = userEvent.setup();
  //   const onClickFn = jest.fn();
  //   render(
  //     <Button onClick={onClickFn} aria-disabled={true}>
  //       ボタン
  //     </Button>
  //   );
  //   const buttonEl = screen.getByRole("button", { name: "ボタン" });
  //   await user.click(buttonEl);
  //   // TODO: 上手くいかない。修正する
  //   expect(onClickFn).not.toHaveBeenCalled();
  // });
});
