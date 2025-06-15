import clsx from "clsx";
import { cva } from "class-variance-authority";

export type RadioSize = "sm" | "md" | "lg";
const defaultSize: RadioSize = "sm";

export const radioSizeStyle: { [key in RadioSize]: string } = {
  sm: "size-6",
  md: "size-8",
  lg: "size-11",
};

export const radioInputSizeStyle: { [key in RadioSize]: string } = {
  sm: "border-[calc(2/16*1rem)]",
  md: "border-[calc(2/16*1rem)]",
  lg: "border-[calc(3/16*1rem)]",
};

export const radioInputErrorStyle = {
  true: "border-error-1 hover:border-red-1000 checked:before:bg-error-1 checked:hover:before:bg-red-1000",
};

export const radioLabelSizeStyle: { [key in RadioSize]: string } = {
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-3",
};

export const radioLabelTextSizeStyle: { [key in RadioSize]: string } = {
  sm: "pt-px text-dns-16N-130",
  md: "pt-1 text-dns-16N-130",
  lg: "pt-2.5 text-dns-17N-130",
};

const radioVariants = cva(
  [
    "flex items-center justify-center shrink-0 rounded-full",
    'has-[input:hover:not(:focus):not([aria-disabled="true"])]:bg-solid-gray-420',
  ],
  {
    variants: {
      size: radioSizeStyle,
    },
    defaultVariants: {
      size: defaultSize,
    },
  }
);

const radioInputVariants = cva(
  [
    "appearance-none size-[calc(5/6*100%)] rounded-full border-solid-gray-600 bg-white",
    "hover:border-black",
    "focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300",
    "checked:border-blue-900 checked:before:bg-blue-900 checked:hover:border-blue-1100 checked:hover:before:bg-blue-1100",
    "before:hidden before:size-full before:bg-white before:[clip-path:circle(calc(5/16*100%))]",
    "checked:before:block",
    "aria-disabled:!border-solid-gray-300 aria-disabled:!bg-solid-gray-50 aria-disabled:checked:before:!bg-solid-gray-300",
    "forced-colors:!border-[ButtonText] forced-colors:checked:!border-[Highlight] forced-colors:checked:before:!bg-[Highlight] forced-colors:aria-disabled:!border-[GrayText] forced-colors:aria-disabled:checked:before:!bg-[GrayText]",
  ],
  {
    variants: {
      size: radioInputSizeStyle,
      isError: radioInputErrorStyle,
    },
    defaultVariants: {
      size: defaultSize,
    },
  }
);

const radioLabelVariants = cva("flex w-fit items-start py-2", {
  variants: {
    size: radioLabelSizeStyle,
  },
  defaultVariants: {
    size: defaultSize,
  },
});

const radioLabelTextVariants = cva("text-solid-gray-800", {
  variants: {
    size: radioLabelTextSizeStyle,
  },
  defaultVariants: {
    size: defaultSize,
  },
});

type OwnProps = {
  size?: RadioSize;
  isError?: boolean;
};

type Props = Omit<React.ComponentPropsWithRef<"input">, "type"> & OwnProps;

export const Radio = ({
  children,
  className,
  onClick,
  size,
  isError,
  ref,
  ...rest
}: Props) => {
  const handleDisabled = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  const radio = (
    <span className={radioVariants({ size })} data-testid="radio">
      <input
        className={clsx(radioInputVariants({ size, isError }), className)}
        onClick={rest["aria-disabled"] ? handleDisabled : onClick}
        ref={ref}
        type="radio"
        {...rest}
      />
    </span>
  );

  return children ? (
    <label className={radioLabelVariants({ size })} data-testid="radio-label">
      {radio}
      <span
        className={radioLabelTextVariants({ size })}
        data-testid="radio-label-text"
      >
        {children}
      </span>
    </label>
  ) : (
    radio
  );
};
