import clsx from "clsx";

type Props = React.ComponentProps<"div">;

export const LanguageSelector = ({ className, ...rest }: Props) => {
  return <div className={clsx("group relative", className)} {...rest} />;
};
