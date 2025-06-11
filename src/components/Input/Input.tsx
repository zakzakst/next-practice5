import clsx from "clsx";
import { cva } from "class-variance-authority";

export type InputBlockSize = "lg" | "md" | "sm";

export const inputBlockSizeStyle: { [key in InputBlockSize]: string } = {
  lg: "h-14",
  md: "h-12",
  sm: "h-10",
};

export const inputErrorStyle = {
  true: "border-error-1 hover:border-red-1000",
};

const inputVariants = cva(
  [
    "max-w-full rounded-8 border bg-white px-4 py-3 border-solid-gray-600 text-oln-16N-100 text-solid-gray-800",
    "hover:border-black",
    "focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300",
    "aria-disabled:border-solid-gray-300 aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420 aria-disabled:pointer-events-none aria-disabled:forced-colors:text-[GrayText] aria-disabled:forced-colors:border-[GrayText]",
  ],
  {
    variants: {
      blockSize: inputBlockSizeStyle,
      isError: inputErrorStyle,
    },
    defaultVariants: {
      blockSize: "md",
    },
  }
);

type OwnProps = {
  blockSize?: InputBlockSize;
  isError?: boolean;
};

export type Props = React.ComponentPropsWithRef<"input"> & OwnProps;

export const Input = (props: Props) => {
  const { className, readOnly, blockSize, isError, ref, ...rest } = props;

  return (
    <input
      className={clsx(inputVariants({ blockSize, isError }), className)}
      aria-invalid={isError}
      readOnly={props["aria-disabled"] ? true : readOnly}
      ref={ref}
      {...rest}
    />
  );
};
