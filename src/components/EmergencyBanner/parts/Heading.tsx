import clsx from "clsx";

type EmergencyBannerHeadingLevel = "h2" | "h3" | "h4" | "h5" | "h6";

type Props = React.ComponentProps<"h2"> & {
  level: EmergencyBannerHeadingLevel;
};

export const EmergencyBannerHeading = ({
  level,
  className,
  children,
  ...rest
}: Props) => {
  const Tag = level;
  return (
    <Tag
      className={clsx(
        "text-std-20B-150 text-black desktop:text-std-24B-150",
        className
      )}
      {...rest}
    >
      【緊急】
      {children}
    </Tag>
  );
};
