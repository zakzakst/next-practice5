import { Textarea, textareaErrorStyle } from ".";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";

describe("Textarea", () => {
  test("クラス名が反映される", () => {
    render(<Textarea className="custom-class" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom-class");
  });

  test("isError時、スタイルと属性が反映される", () => {
    render(<Textarea isError />);
    const textareaEl = screen.getByRole("textbox");
    expect(textareaEl).toHaveClass(textareaErrorStyle["true"]);
    expect(textareaEl).toHaveAttribute("aria-invalid", "true");
  });

  test("aria-disabled=trueの時、readOnlyが設定される", () => {
    render(<Textarea aria-disabled />);
    expect(screen.getByRole("textbox")).toHaveAttribute("readonly");
  });

  test("refで要素を参照できる", () => {
    const ref = createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });
});
