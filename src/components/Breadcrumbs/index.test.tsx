import {
  Breadcrumbs,
  BreadcrumbsLabel,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from ".";
import { render, screen } from "@testing-library/react";

describe("Breadcrumbs", () => {
  test("クラス名が反映される", () => {
    render(
      <Breadcrumbs
        aria-labelledby="breadcrumb-label"
        className="breadcrumbs-class"
      >
        <BreadcrumbsLabel className="label-class" id="breadcrumb-label">
          現在位置
        </BreadcrumbsLabel>
        <BreadcrumbList className="list-class">
          <BreadcrumbItem className="listitem-class">
            <BreadcrumbLink href="#" className="link-class">
              パンくず
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumbs>
    );
    expect(screen.getByRole("navigation")).toHaveClass("breadcrumbs-class");
    expect(screen.getByText("現在位置")).toHaveClass("label-class");
    expect(screen.getByRole("list")).toHaveClass("list-class");
    expect(screen.getByRole("listitem")).toHaveClass("listitem-class");
    expect(screen.getByRole("link", { name: "パンくず" })).toHaveClass(
      "link-class"
    );
  });

  test("isCurrentの設定が反映される", () => {
    render(<BreadcrumbItem isCurrent>パンくず項目</BreadcrumbItem>);
    const itemEl = screen.getByRole("listitem");
    expect(itemEl).toHaveAttribute("aria-current", "page");
    expect(itemEl).toHaveClass("text-oln-16N-100");
    expect(
      screen.queryByTestId("breadcrumb-item-icon")
    ).not.toBeInTheDocument();
  });

  test("asChildがtrueの場合、子要素のみが存在し、クラス名が統合される", () => {
    render(
      <BreadcrumbLink className="link-class" asChild>
        <span className="child-class" data-testid="child">
          項目
        </span>
      </BreadcrumbLink>
    );
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    const childEl = screen.getByTestId("child");
    expect(childEl).toBeInTheDocument();
    expect(childEl).toHaveClass("link-class");
    expect(childEl).toHaveClass("child-class");
  });
});
