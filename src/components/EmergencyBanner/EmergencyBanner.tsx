import clsx from "clsx";

type Props = React.ComponentProps<"div">;

export const EmergencyBanner = ({ className, children, ...rest }: Props) => {
  return (
    <div
      className={clsx(
        "block px-2.5 py-3.5 border-[6px] bg-white desktop:p-[calc(26/16*1rem)] border-warning-orange-1",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
