import clsx from "clsx";

type OwnProps = {
  isCondensed?: boolean;
};

type Props = React.ComponentPropsWithRef<"ul"> & OwnProps;

export const LanguageSelectorMenu = ({
  className,
  isCondensed,
  ref,
  ...rest
}: Props) => {
  return (
    <ul
      className={clsx(
        "min-w-fit w-auto py-2 border border-solid-gray-420 bg-white shadow-1 rounded-8",
        "has-[>:nth-child(7)]:rounded-r-none",
        isCondensed
          ? "max-h-[calc((32*6.5+16)/16*1rem)]"
          : "max-h-[calc((44*6.5+16)/16*1rem)]",
        className
      )}
      ref={ref}
      {...rest}
    ></ul>
  );
};
