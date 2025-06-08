import {
  Children,
  HTMLAttributes,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";
import clsx from "clsx";

type Props = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
};

export const Slot = ({ children, ...rest }: Props) => {
  if (isValidElement<HTMLElement>(children)) {
    return cloneElement(children, {
      ...rest,
      ...children.props,
      className: clsx(rest.className, children.props.className),
    });
  }

  if (Children.count(children) > 1) {
    throw new Error("Slotには複数の子要素を指定できません");
  }

  return null;
};
