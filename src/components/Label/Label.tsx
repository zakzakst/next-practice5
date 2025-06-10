import clsx from "clsx";
import { cva, VariantProps } from "class-variance-authority";

export type LabelSize = "lg" | "md" | "sm";

export const labelSizeStyle: { [key in LabelSize]: string } = {
  lg: "text-std-18B-160",
  md: "text-std-17B-170",
  sm: "text-std-16B-170",
};

const labelVariants = cva("flex w-fit items-center gap-2 text-solid-gray-800", {
  variants: {
    size: labelSizeStyle,
  },
  defaultVariants: {
    size: "md",
  },
});

type OwnProps = VariantProps<typeof labelVariants>;

export type Props = React.ComponentPropsWithRef<"label"> & OwnProps;

export const Label = ({ children, className, size, ...rest }: Props) => {
  return (
    <label className={clsx(labelVariants({ size }), className)} {...rest}>
      {children}
    </label>
  );
};
