import { RequirementBadge, requirementBadgeOptionalStyle } from ".";
import { render, screen } from "@testing-library/react";

describe("RequirementBadge", () => {
  test("クラス名が反映される", () => {
    render(
      <RequirementBadge className="custom-class">バッジ</RequirementBadge>
    );
    expect(screen.getByText("バッジ")).toHaveClass("custom-class");
  });

  test("isOptionalのスタイルが反映される", () => {
    render(<RequirementBadge isOptional>バッジ</RequirementBadge>);
    expect(screen.getByText("バッジ")).toHaveClass(
      requirementBadgeOptionalStyle["true"]
    );
  });
});
