import clsx from "clsx";

type Props = Omit<React.ComponentPropsWithRef<"button">, "type">;

export const LanguageSelectorButton = ({ className, ref, ...rest }: Props) => {
  return (
    <button
      className={clsx(
        "flex w-fit gap-1 items-center px-2 min-h-[calc(44/16*1rem)] text-oln-16N-100 text-solid-gray-800 rounded-8",
        "hover:bg-solid-gray-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]",
        "focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 focus-visible:bg-yellow-300",
        className
      )}
      type="button"
      ref={ref}
      {...rest}
    />
  );
};
