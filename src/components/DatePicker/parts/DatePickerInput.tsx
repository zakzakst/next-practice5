import clsx from "clsx";

const DateTypeMap = {
  date: "日",
  month: "月",
  year: "年",
} as const;

type DateType = keyof typeof DateTypeMap;

type OwnProps = {
  dateType: DateType;
};

type Props = Omit<React.ComponentPropsWithRef<"input">, "type"> & OwnProps;

export const DatePickerDate = ({
  dateType,
  className,
  readOnly,
  ref,
  ...rest
}: Props) => {
  return (
    <label className="relative z-0 inline-flex flex-row-reverse last:pe-4 [&:has([aria-disabled='true'])]:pointer-events-none">
      <span className="relative z-10 self-center bg-[--bg] p-1 text-oln-16N-100">
        {DateTypeMap[dateType]}
      </span>
      <input
        className={clsx(
          "-me-1 w-11 rounded-8 border border-transparent bg-transparent pe-3 text-right focus:border-solid-gray-600 focus:outline focus:outline-4 focus:outline-offset-[calc(2/16*1rem)] focus:outline-black focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300 aria-disabled:pointer-events-none forced-colors:border-[Canvas] forced-colors:aria-disabled:focus:border-[GrayText]",
          className
        )}
        type="text"
        inputMode="numeric"
        pattern="\d+"
        readOnly={rest["aria-disabled"] ? true : readOnly}
        ref={ref}
        {...rest}
      />
    </label>
  );
};
