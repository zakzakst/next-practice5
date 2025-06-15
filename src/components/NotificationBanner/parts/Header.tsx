import clsx from "clsx";

type Props = React.ComponentProps<"div">;

export const NotificationBannerHeader = ({
  className,
  children,
  ...rest
}: Props) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-subgrid col-start-2 -col-end-1 place-items-start",
        "[&>*:last-child]:-col-end-1",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
