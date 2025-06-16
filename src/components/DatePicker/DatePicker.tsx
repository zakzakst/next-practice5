import { useRef } from "react";
import clsx from "clsx";
import { cva } from "class-variance-authority";

export type DatePickerSize = "lg" | "md" | "sm";

export const datePickerSizeStyle: { [key in DatePickerSize]: string } = {
  lg: "h-14",
  md: "h-12",
  sm: "h-10",
};

export const datePickerIsErrorStyle = {
  true: "border-error-1 focus-within:border-red-1000 hover:border-red-1000",
};

export const datePickerIsDisabledStyle = {
  true: "border-solid-gray-300 text-solid-gray-420 [--bg:theme(colors.solid-gray.50)] forced-colors:border-[GrayText] forced-colors:text-[GrayText]",
};

const datePickerVariants = cva(
  "inline-flex -space-x-1 rounded-8 border border-solid-gray-600 bg-[--bg] p-0.5 pe-0 text-solid-gray-900 [--bg:theme(colors.white)] focus-within:border-black hover:border-solid-gray-900",
  {
    variants: {
      size: datePickerSizeStyle,
      isError: datePickerIsErrorStyle,
      isDisabled: datePickerIsDisabledStyle,
    },
    defaultVariants: {
      size: "lg",
    },
  }
);

type OwnProps = {
  size?: DatePickerSize;
  isError?: boolean;
  isDisabled?: boolean;
  children: (props: {
    yearRef: React.Ref<HTMLInputElement>;
    monthRef: React.Ref<HTMLInputElement>;
    dateRef: React.Ref<HTMLInputElement>;
  }) => React.JSX.Element;
};

type Props = Omit<React.ComponentProps<"div">, "children" | "onKeyDown"> &
  OwnProps;

export const DatePicker = ({
  className,
  size,
  isError,
  isDisabled,
  children,
  ...rest
}: Props) => {
  const yearRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowRight") {
      moveRight(e);
    } else if (e.key === "ArrowLeft") {
      moveLeft(e);
    } else if (e.key.match(/^[^0-9]$/)) {
      if (!e.ctrlKey && !e.metaKey) {
        e.preventDefault();
      }
    }
  };

  const moveRight = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    if (input.selectionStart !== input.selectionEnd) {
      // 範囲選択している場合
      return;
    }
    if (input.selectionEnd === input.value.length) {
      // カーソルが文字の末尾にある場合
      e.preventDefault();
      if (input === yearRef.current) {
        monthRef.current?.focus();
      } else if (input === monthRef.current) {
        dateRef.current?.focus();
      }
    }
  };

  const moveLeft = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    if (input.selectionStart !== input.selectionEnd) {
      // 範囲選択している場合
      return;
    }
    if (input.selectionStart === 0) {
      // カーソルが文字の先頭にある場合
      e.preventDefault();
      if (input === dateRef.current) {
        monthRef.current?.focus();
      } else if (input === monthRef.current) {
        yearRef.current?.focus();
      }
    }
  };

  return (
    <div
      className={clsx(
        datePickerVariants({ size, isError, isDisabled }),
        className
      )}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children({ yearRef, monthRef, dateRef })}
    </div>
  );
};
