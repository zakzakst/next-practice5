import clsx from "clsx";
import { cva } from "class-variance-authority";

export type CheckboxSize = "sm" | "md" | "lg";
const defaultSize: CheckboxSize = "sm";

export const checkboxSizeStyle: { [key in CheckboxSize]: string } = {
  sm: "size-6",
  md: "size-8",
  lg: "size-11",
};

export const checkboxInputSizeStyle: { [key in CheckboxSize]: string } = {
  sm: "border-[calc(2/16*1rem)]",
  md: "border-[calc(2/16*1rem)] before:origin-top-left before:scale-[calc(20/14)]",
  lg: "border-[calc(3/16*1rem)] before:origin-top-left before:scale-[calc(27/14)]",
};

export const checkboxInputErrorStyle = {
  true: "border-error-1 hover:border-red-1000 checked:bg-error-1 checked:hover:bg-red-1000 indeterminate:bg-error-1 indeterminate:hover:bg-red-1000",
};

export const checkboxLabelSizeStyle: { [key in CheckboxSize]: string } = {
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-2",
};

export const checkboxLabelTextSizeStyle: { [key in CheckboxSize]: string } = {
  sm: "pt-px text-dns-16N-130",
  md: "pt-1 text-dns-16N-130",
  lg: "pt-2.5 text-dns-17N-130",
};

const checkboxVariants = cva(
  [
    "flex items-center justify-center shrink-0 rounded-[calc(1/8*100%)]",
    'has-[input:hover:not(:focus):not([aria-disabled="true"])]:bg-solid-gray-420',
  ],
  {
    variants: {
      size: checkboxSizeStyle,
    },
    defaultVariants: {
      size: defaultSize,
    },
  }
);

const checkboxInputVariants = cva(
  [
    "appearance-none size-3/4 rounded-[calc(2/18*100%)] border-solid-gray-600 bg-white bg-clip-padding",
    "hover:border-black",
    "focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300",
    "checked:border-blue-900 checked:bg-blue-900 checked:hover:border-blue-1100 checked:hover:bg-blue-1100",
    "indeterminate:border-blue-900 indeterminate:bg-blue-900 indeterminate:hover:border-blue-1100 indeterminate:hover:bg-blue-1100",
    "before:hidden before:size-3.5 before:bg-white",
    "checked:before:block checked:before:[clip-path:path('M5.6,11.2L12.65,4.15L11.25,2.75L5.6,8.4L2.75,5.55L1.35,6.95L5.6,11.2Z')]",
    "indeterminate:before:block indeterminate:before:[clip-path:path('M3.25,7.75H10.75V6.25H3.25V7.75Z')]",
    "aria-disabled:!border-solid-gray-300 aria-disabled:!bg-solid-gray-50 aria-disabled:checked:!bg-solid-gray-300 aria-disabled:indeterminate:!bg-solid-gray-300 aria-disabled:before:border-solid-gray-50",
    "forced-colors:!border-[ButtonText] forced-colors:checked:!bg-[Highlight] forced-colors:checked:!border-[Highlight] forced-colors:indeterminate:!bg-[Highlight] forced-colors:indeterminate:!border-[Highlight] forced-colors:before:!bg-[HighlightText] forced-colors:aria-disabled:!border-[GrayText] forced-colors:aria-disabled:checked:!bg-[GrayText]",
  ],
  {
    variants: {
      size: checkboxInputSizeStyle,
      isError: checkboxInputErrorStyle,
    },
    defaultVariants: {
      size: defaultSize,
    },
  }
);

const checkboxLabelVariants = cva("flex w-fit items-start py-2", {
  variants: {
    size: checkboxLabelSizeStyle,
  },
  defaultVariants: {
    size: defaultSize,
  },
});

const checkboxLabelTextVariants = cva("text-solid-gray-800", {
  variants: {
    size: checkboxLabelTextSizeStyle,
  },
  defaultVariants: {
    size: defaultSize,
  },
});

type OwnProps = {
  size?: CheckboxSize;
  isError?: boolean;
};

type Props = Omit<React.ComponentPropsWithRef<"input">, "type"> & OwnProps;

export const Checkbox = ({
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

  const checkbox = (
    <span className={checkboxVariants({ size })} data-testid="checkbox">
      <input
        className={clsx(checkboxInputVariants({ size, isError }), className)}
        onClick={rest["aria-disabled"] ? handleDisabled : onClick}
        ref={ref}
        type="checkbox"
        {...rest}
      />
    </span>
  );

  return children ? (
    <label
      className={checkboxLabelVariants({ size })}
      data-testid="checkbox-label"
    >
      {checkbox}
      <span
        className={checkboxLabelTextVariants({ size })}
        data-testid="checkbox-label-text"
      >
        {children}
      </span>
    </label>
  ) : (
    checkbox
  );
};
