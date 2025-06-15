import { NotificationBanner, bannerVariantStyle, bannerTypeStyle } from ".";
import { render, screen } from "@testing-library/react";

describe("NotificationBanner", () => {
  test("デフォルトの設定が反映される", () => {
    render(<NotificationBanner>通知バナー</NotificationBanner>);
    const bannerEl = screen.getByTestId("banner");
    expect(bannerEl).toHaveClass(bannerVariantStyle["standard"]);
    expect(bannerEl).toHaveClass(bannerTypeStyle["info1"]);
    expect(screen.getByTestId("info-icon")).toBeInTheDocument();
  });

  test("クラス名が反映される", () => {
    render(
      <NotificationBanner className="custom-class">
        通知バナー
      </NotificationBanner>
    );
    expect(screen.getByTestId("banner")).toHaveClass("custom-class");
  });

  test("variantのスタイルが反映される", () => {
    render(
      <NotificationBanner variant="color-chip">通知バナー</NotificationBanner>
    );
    const bannerEl = screen.getByTestId("banner");
    expect(bannerEl).not.toHaveClass(bannerVariantStyle["standard"]);
    expect(bannerEl).toHaveClass(bannerVariantStyle["color-chip"]);
  });

  test("typeの設定が反映される", () => {
    render(<NotificationBanner type="error">通知バナー</NotificationBanner>);
    const bannerEl = screen.getByTestId("banner");
    expect(bannerEl).not.toHaveClass(bannerTypeStyle["info1"]);
    expect(bannerEl).toHaveClass(bannerTypeStyle["error"]);
    expect(screen.queryByTestId("info-icon")).not.toBeInTheDocument();
    expect(screen.getByTestId("error-icon")).toBeInTheDocument();
  });
});
