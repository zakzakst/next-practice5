import { EmergencyBanner } from ".";
import { render, screen } from "@testing-library/react";

describe("EmergencyBanner", () => {
  test("クラス名が反映される", () => {
    render(
      <EmergencyBanner className="custom-class">緊急時バナー</EmergencyBanner>
    );
    expect(screen.getByText("緊急時バナー")).toHaveClass("custom-class");
  });
});
