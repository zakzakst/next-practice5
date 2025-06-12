import clsx from "clsx";

type Props = React.ComponentProps<"div">;

export const EmergencyBannerBody = ({
  className,
  children,
  ...rest
}: Props) => {
  return (
    <div className={clsx("mt-2 desktop:mt-4", className)} {...rest}>
      {children}
    </div>
  );
};
