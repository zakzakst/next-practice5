"use client";
import { useRef, useEffect } from "react";
import { Button, Divider, RequirementBadge, Textarea } from "@/components";
import {
  Accordion,
  AccordionSummary,
  AccordionContent,
  AccordionBackLink,
} from "@/components/Accordion";

export default function Home() {
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    console.log(ref.current);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button ref={ref} variant="text">
        ボタン
      </Button>
      <Divider className="w-full" />
      <RequirementBadge isOptional>バッジ</RequirementBadge>
      <Textarea aria-disabled />
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
    </div>
  );
}
