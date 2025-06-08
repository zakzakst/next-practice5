import { Slot } from "./index";
import { render, screen } from "@testing-library/react";

describe("Slot", () => {
  test("Slotのクラス名が子コンポーネントに追加される", () => {
    render(
      <Slot className="slot-class">
        <button className="child-class">子コンポーネント</button>
      </Slot>
    );
    expect(
      screen.getByRole("button", { name: "子コンポーネント" })
    ).toHaveClass("slot-class child-class");
  });

  test("Slotに設定された属性が子コンポーネントに追加される", () => {
    render(
      <Slot data-attr="slot">
        <button>子コンポーネント</button>
      </Slot>
    );
    expect(
      screen.getByRole("button", { name: "子コンポーネント" })
    ).toHaveAttribute("data-attr", "slot");
  });

  test("Slotと子コンポーネントの両方で同じ属性が指定されている場合、子コンポーネントの値が優先される", () => {
    render(
      <Slot data-attr="slot">
        <button data-attr="child">子コンポーネント</button>
      </Slot>
    );
    expect(
      screen.getByRole("button", { name: "子コンポーネント" })
    ).toHaveAttribute("data-attr", "child");
  });

  test("子要素が複数ある場合、エラーになる", () => {
    expect(() =>
      render(
        <Slot>
          <button>子コンポーネント</button>
          <button>子コンポーネント</button>
        </Slot>
      )
    ).toThrow("Slotには複数の子要素を指定できません");
  });

  test("子要素がHTML要素以外の場合、何も描画されない", () => {
    render(<Slot>テキスト</Slot>);
    expect(screen.queryByText("テキスト")).toBeNull();
  });
});
