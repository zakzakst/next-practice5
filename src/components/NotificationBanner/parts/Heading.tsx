import clsx from "clsx";

export type NotificationBannerHeadingLevel = "h2" | "h3" | "h4" | "h5" | "h6";

type OwnProps = {
  level: NotificationBannerHeadingLevel;
};

type Props = React.ComponentProps<"h2"> & OwnProps;

export const NotificationBannerHeading = ({
  level,
  className,
  children,
  ...rest
}: Props) => {
  const Tag = level;

  return (
    <Tag
      className={clsx(
        "text-std-17B-170 text-solid-gray-900 col-start-1",
        "desktop:mt-0.5 desktop:text-std-20B-160",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};
