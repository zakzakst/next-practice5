import {
  Radio,
  radioSizeStyle,
  radioInputSizeStyle,
  radioInputErrorStyle,
  radioLabelSizeStyle,
  radioLabelTextSizeStyle,
} from ".";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import userEvent from "@testing-library/user-event";

describe("Radio", () => {
  test("デフォルトのスタイルが設定される", () => {
    render(<Radio>ラジオボタン</Radio>);
    expect(screen.getByTestId("radio")).toHaveClass(radioSizeStyle["sm"]);
    expect(screen.getByRole("radio")).toHaveClass(radioInputSizeStyle["sm"]);
    expect(screen.getByTestId("radio-label")).toHaveClass(
      radioLabelSizeStyle["sm"]
    );
    expect(screen.getByTestId("radio-label-text")).toHaveClass(
      radioLabelTextSizeStyle["sm"]
    );
  });

  test("クラス名が反映される", () => {
    render(<Radio className="custom-class">ラジオボタン</Radio>);
    expect(screen.getByRole("radio")).toHaveClass("custom-class");
  });

  test("isErrorのスタイルが反映される", () => {
    render(<Radio isError>ラジオボタン</Radio>);
    expect(screen.getByRole("radio")).toHaveClass(radioInputErrorStyle["true"]);
  });

  test("refで要素を参照できる", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Radio ref={ref}>ラジオボタン</Radio>);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  test("childrenがない場合、ラジオボタンのみが表示される", () => {
    render(<Radio />);
    expect(screen.getByTestId("radio")).toBeInTheDocument();
    expect(screen.getByRole("radio")).toBeInTheDocument();
    expect(screen.queryByTestId("radio-label")).not.toBeInTheDocument();
    expect(screen.queryByTestId("radio-label-text")).not.toBeInTheDocument();
  });

  test("aria-disabledがtrueの場合、onClickが実行されない", async () => {
    const user = userEvent.setup();
    const onClickFn = jest.fn();
    render(<Radio onClick={onClickFn} aria-disabled="true" />);
    const radioInputEl = screen.getByRole("radio");
    await user.click(radioInputEl);
    expect(onClickFn).toHaveBeenCalledTimes(0);
  });
});
