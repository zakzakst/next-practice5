import {
  Accordion,
  AccordionSummary,
  AccordionContent,
  AccordionBackLink,
} from ".";
import { render, screen } from "@testing-library/react";

test("クラス名が反映される", () => {
  render(
    <Accordion className="accordion-class">
      <AccordionSummary
        id="accordion-summary-1"
        className="accordion-summary-class"
      >
        概要
      </AccordionSummary>
      <AccordionContent className="accordion-content-class">
        <p>内容</p>
        <AccordionBackLink
          href="#accordion-summary-1"
          className="accordion-link-class"
        >
          概要に戻る
        </AccordionBackLink>
      </AccordionContent>
    </Accordion>
  );
  expect(screen.getByTestId("accordion")).toHaveClass("accordion-class");
  expect(screen.getByTestId("accordion-summary")).toHaveClass(
    "accordion-summary-class"
  );
  // TODO: AccordionContentが描画されているのはjestの挙動か？
  expect(screen.getByTestId("accordion-content")).toHaveClass(
    "accordion-content-class"
  );
  expect(screen.getByRole("link", { name: "概要に戻る" })).toHaveClass(
    "accordion-link-class"
  );
});

// TODO: 「AccordionSummaryをクリックする前はAccordionContentが描画されていない」テストする方法を調べる
