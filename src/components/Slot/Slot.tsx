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
  // TODO: エラー解消する
  if (isValidElement(children)) {
    return cloneElement(children, {
      ...rest,
      ...children.props,
      className: `${rest.className ?? ""} ${children.props.className ?? ""}`,
    });
  }

  if (Children.count(children) > 1) {
    Children.only(null);
  }

  return null;
};
