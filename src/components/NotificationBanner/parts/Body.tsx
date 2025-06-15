import clsx from "clsx";

type Props = React.ComponentProps<"div">;

export const NotificationBannerBody = ({
  className,
  children,
  ...rest
}: Props) => {
  return (
    <div
      className={clsx(
        "col-start-1 -col-end-1 desktop:col-start-2 text-std-16N-170 text-solid-gray-800",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
