import clsx from "clsx";
import { cva } from "class-variance-authority";

export const textareaErrorStyle = {
  true: "border-error-1 hover:border-red-1000",
};

const textareaVariants = cva(
  [
    "rounded-8 max-w-full border border-solid-gray-600 bg-white p-4 text-std-16N-170 text-solid-gray-800",
    "hover:border-black",
    "focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300",
    "aria-disabled:border-solid-gray-300 aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420 aria-disabled:pointer-events-none aria-disabled:forced-colors:text-[GrayText] aria-disabled:forced-colors:border-[GrayText]",
  ],
  {
    variants: {
      isError: textareaErrorStyle,
    },
  }
);

type OwnProps = {
  isError?: boolean;
};

export type Props = React.ComponentPropsWithRef<"textarea"> & OwnProps;

export const Textarea = (props: Props) => {
  const { className, isError, readOnly, ref, ...rest } = props;

  return (
    <textarea
      className={clsx(textareaVariants({ isError }), className)}
      aria-invalid={isError}
      readOnly={props["aria-disabled"] ? true : readOnly}
      ref={ref}
      {...rest}
    />
  );
};
