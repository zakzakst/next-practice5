import { ErrorText } from ".";
import { render, screen } from "@testing-library/react";

describe("ErrorText", () => {
  test("クラス名が反映される", () => {
    render(<ErrorText className="custom-class">エラーテキスト</ErrorText>);
    expect(screen.getByText("エラーテキスト")).toHaveClass("custom-class");
  });
});
