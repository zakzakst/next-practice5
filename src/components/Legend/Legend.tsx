import clsx from "clsx";
import { cva, VariantProps } from "class-variance-authority";

export type LegendSize = "lg" | "md" | "sm";

export const legendSizeStyle: { [key in LegendSize]: string } = {
  lg: "text-std-18B-160",
  md: "text-std-17B-170",
  sm: "text-std-16B-170",
};

const legendVariants = cva(
  "flex w-fit items-center gap-2 text-solid-gray-800",
  {
    variants: {
      size: legendSizeStyle,
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type OwnProps = VariantProps<typeof legendVariants>;

export type Props = React.ComponentPropsWithRef<"legend"> & OwnProps;

export const Legend = ({ children, className, size, ...rest }: Props) => {
  return (
    <legend className={clsx(legendVariants({ size }), className)} {...rest}>
      {children}
    </legend>
  );
};
