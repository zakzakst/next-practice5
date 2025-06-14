import {
  Checkbox,
  checkboxSizeStyle,
  checkboxInputSizeStyle,
  checkboxInputErrorStyle,
  checkboxLabelSizeStyle,
  checkboxLabelTextSizeStyle,
} from ".";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import userEvent from "@testing-library/user-event";

describe("Checkbox", () => {
  test("デフォルトのスタイルが設定される", () => {
    render(<Checkbox>チェックボックス</Checkbox>);
    expect(screen.getByTestId("checkbox")).toHaveClass(checkboxSizeStyle["sm"]);
    expect(screen.getByRole("checkbox")).toHaveClass(
      checkboxInputSizeStyle["sm"]
    );
    expect(screen.getByTestId("checkbox-label")).toHaveClass(
      checkboxLabelSizeStyle["sm"]
    );
    expect(screen.getByTestId("checkbox-label-text")).toHaveClass(
      checkboxLabelTextSizeStyle["sm"]
    );
  });

  test("クラス名が反映される", () => {
    render(<Checkbox className="custom-class">チェックボックス</Checkbox>);
    expect(screen.getByRole("checkbox")).toHaveClass("custom-class");
  });

  test("isErrorのスタイルが反映される", () => {
    render(<Checkbox isError>チェックボックス</Checkbox>);
    expect(screen.getByRole("checkbox")).toHaveClass(
      checkboxInputErrorStyle["true"]
    );
  });

  test("refで要素を参照できる", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Checkbox ref={ref}>チェックボックス</Checkbox>);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  test("childrenがない場合、チェックボックスのみが表示される", () => {
    render(<Checkbox />);
    expect(screen.getByTestId("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.queryByTestId("checkbox-label")).not.toBeInTheDocument();
    expect(screen.queryByTestId("checkbox-label-text")).not.toBeInTheDocument();
  });

  test("aria-disabledがtrueの場合、onClickが実行されない", async () => {
    const user = userEvent.setup();
    const onClickFn = jest.fn();
    render(<Checkbox onClick={onClickFn} aria-disabled="true" />);
    const checkboxInputEl = screen.getByRole("checkbox");
    await user.click(checkboxInputEl);
    expect(onClickFn).toHaveBeenCalledTimes(0);
  });
});
