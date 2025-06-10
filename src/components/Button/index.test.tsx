import {
  Button,
  buttonBaseStyle,
  buttonVariantStyle,
  buttonSizeStyle,
} from "./index";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";
// import userEvent from "@testing-library/user-event";

describe("Button", () => {
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
    render(<Button variant="solid-fill">ボタン</Button>);
    expect(screen.getByRole("button", { name: "ボタン" })).toHaveClass(
      buttonVariantStyle["solid-fill"]
    );
  });

  test("sizeのスタイルが反映される", () => {
    render(<Button size="md">ボタン</Button>);
    expect(screen.getByRole("button", { name: "ボタン" })).toHaveClass(
      buttonSizeStyle["md"]
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
  //     <Button onClick={onClickFn} aria-disabled="true">
  //       ボタン
  //     </Button>
  //   );
  //   const buttonEl = screen.getByRole("button", { name: "ボタン" });
  //   await user.click(buttonEl);
  //   // TODO: 上手くいかない。修正する
  //   expect(onClickFn).toHaveBeenCalledTimes(0);
  // });
});
