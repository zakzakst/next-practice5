import clsx from "clsx";

type Props = Omit<React.ComponentPropsWithRef<"button">, "type">;

export const HamburgerMenuButton = ({
  children,
  className,
  ref,
  ...rest
}: Props) => {
  return (
    <button
      className={clsx(
        "flex w-fit items-center text-oln-16N-100 rounded-4 touch-manipulation",
        "hover:bg-solid-gray-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]",
        "focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300",
        className
      )}
      ref={ref}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};
