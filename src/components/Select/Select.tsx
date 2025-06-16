import clsx from "clsx";
import { cva } from "class-variance-authority";

type SelectBlockSize = "lg" | "md" | "sm";
const defaultSelectBlockSize: SelectBlockSize = "lg";

export const selectBlockSizeStyle: { [key in SelectBlockSize]: string } = {
  lg: "h-14",
  md: "h-12",
  sm: "h-10",
};

export const selectIsErrorStyle = {
  true: "border-error-1 hover:border-red-1000",
};

const selectVariants = cva(
  [
    "w-full appearance-none border border-solid-gray-600 rounded-8 bg-white pl-4 pr-10 py-[calc(11/16*1rem)] text-oln-16N-100 text-solid-gray-800",
    "hover:border-black",
    "focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300",
    "aria-disabled:border-solid-gray-300 aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420 aria-disabled:pointer-events-none aria-disabled:forced-colors:text-[GrayText] aria-disabled:forced-colors:border-[GrayText]",
  ],
  {
    variants: {
      blockSize: selectBlockSizeStyle,
      isError: selectIsErrorStyle,
    },
    defaultVariants: {
      blockSize: defaultSelectBlockSize,
    },
  }
);

type OwnProps = {
  blockSize?: SelectBlockSize;
  isError?: boolean;
};

type Props = React.ComponentPropsWithRef<"select"> & OwnProps;

export const Select = ({
  className,
  blockSize,
  isError,
  onKeyDown,
  onMouseDown,
  ref,
  ...rest
}: Props) => {
  const handleDisabledKeyDown = (e: React.KeyboardEvent<HTMLSelectElement>) => {
    if (e.code !== "Tab") {
      e.preventDefault();
    }
  };

  const handleDisabledMouseDown = (
    e: React.MouseEvent<HTMLSelectElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  return (
    <span className="relative">
      <select
        className={clsx(selectVariants({ blockSize, isError }), className)}
        aria-invalid={isError}
        ref={ref}
        onKeyDown={rest["aria-disabled"] ? handleDisabledKeyDown : onKeyDown}
        onMouseDown={
          rest["aria-disabled"] ? handleDisabledMouseDown : onMouseDown
        }
        {...rest}
      />
      <svg
        aria-hidden={true}
        className={clsx(
          "pointer-events-none absolute right-4 top-1/2 -translate-y-1/2",
          rest["aria-disabled"]
            ? "text-solid-gray-420 forced-colors:text-[GrayText]"
            : "text-solid-gray-900 forced-colors:text-[CanvasText]"
        )}
        fill="none"
        height="16"
        viewBox="0 0 16 16"
        width="16"
      >
        <path
          d="M13.3344 4.40002L8.00104 9.73336L2.66771 4.40002L1.73438 5.33336L8.00104 11.6L14.2677 5.33336L13.3344 4.40002Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};
