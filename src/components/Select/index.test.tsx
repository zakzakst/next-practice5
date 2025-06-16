import { Select, selectBlockSizeStyle, selectIsErrorStyle } from ".";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import userEvent from "@testing-library/user-event";

describe("Select", () => {
  test("デフォルトのスタイルが設定される", () => {
    render(<Select />);
    expect(screen.getByRole("combobox")).toHaveClass(
      selectBlockSizeStyle["lg"]
    );
  });

  test("blockSizeのスタイルが反映される", () => {
    render(<Select blockSize="sm" />);
    expect(screen.queryByRole("combobox")).not.toHaveClass(
      selectBlockSizeStyle["lg"]
    );
    expect(screen.getByRole("combobox")).toHaveClass(
      selectBlockSizeStyle["sm"]
    );
  });

  test("isErrorの設定が反映される", () => {
    render(<Select isError />);
    const selectEl = screen.getByRole("combobox");
    expect(selectEl).toHaveClass(selectIsErrorStyle["true"]);
    expect(selectEl).toHaveAttribute("aria-invalid", "true");
  });

  test("refで要素を参照できる", () => {
    const ref = createRef<HTMLSelectElement>();
    render(<Select ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });

  test("aria-disabledがtrueの場合、onKeyDown,onMouseDownが実行されない", async () => {
    const user = userEvent.setup();
    const onKeyDownFn = jest.fn();
    const onMouseDownFn = jest.fn();
    render(
      <Select
        aria-disabled={true}
        onKeyDown={onKeyDownFn}
        onMouseDown={onMouseDownFn}
      />
    );
    const selectEl = screen.getByRole("combobox");
    await user.type(selectEl, "{arrowdown}");
    expect(onKeyDownFn).not.toHaveBeenCalled();
    await user.pointer({ keys: "[MouseLeft]", target: selectEl });
    expect(onMouseDownFn).not.toHaveBeenCalled();
  });
});
