import { Input, inputBlockSizeStyle, inputErrorStyle } from ".";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";

describe("Input", () => {
  test("デフォルトのスタイルが設定される", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toHaveClass(inputBlockSizeStyle["md"]);
  });

  test("クラス名が反映される", () => {
    render(<Input className="custom-class" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom-class");
  });

  test("blockSizeのスタイルが反映される", () => {
    render(<Input blockSize="lg" />);
    expect(screen.getByRole("textbox")).not.toHaveClass(
      inputBlockSizeStyle["md"]
    );
    expect(screen.getByRole("textbox")).toHaveClass(inputBlockSizeStyle["lg"]);
  });

  test("isError時、スタイルと属性が反映される", () => {
    render(<Input isError />);
    const textareaEl = screen.getByRole("textbox");
    expect(textareaEl).toHaveClass(inputErrorStyle["true"]);
    expect(textareaEl).toHaveAttribute("aria-invalid", "true");
  });

  test("aria-disabled=trueの時、readOnlyが設定される", () => {
    render(<Input aria-disabled />);
    expect(screen.getByRole("textbox")).toHaveAttribute("readonly");
  });

  test("refで要素を参照できる", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
