import {
  Children,
  HTMLAttributes,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";

type Props = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
};

export const Slot = ({ children, ...rest }: Props) => {
  if (isValidElement<HTMLElement>(children)) {
    return cloneElement(children, {
      ...rest,
      ...children.props,
      className: `${rest.className ?? ""} ${children.props.className ?? ""}`,
    });
  }

  if (Children.count(children) > 1) {
    throw new Error("Slot requires exactly one child.");
  }

  return null;
};
