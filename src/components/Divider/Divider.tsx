import clsx from "clsx";
import { cva, VariantProps } from "class-variance-authority";

export type DividerColor = "gray-420" | "gray-536" | "black";

export const dividerColorStyle: { [key in DividerColor]: string } = {
  "gray-420": "border-solid-gray-420",
  "gray-536": "border-solid-gray-536",
  black: "border-black",
};

const dividerVariants = cva("", {
  variants: {
    color: dividerColorStyle,
  },
  defaultVariants: {
    color: "black",
  },
});

type OwnProps = VariantProps<typeof dividerVariants>;

export type Props = React.ComponentPropsWithRef<"hr"> & OwnProps;

export const Divider = ({ className, color, ...rest }: Props) => {
  return (
    <hr className={clsx(dividerVariants({ color }), className)} {...rest} />
  );
};
