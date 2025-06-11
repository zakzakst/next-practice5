import { SupportText } from ".";
import { render, screen } from "@testing-library/react";

describe("SupportText", () => {
  test("クラス名が反映される", () => {
    render(<SupportText className="custom-class">補足文言</SupportText>);
    expect(screen.getByText("補足文言")).toHaveClass("custom-class");
  });
});
