import clsx from "clsx";

type Props = React.ComponentProps<"ol">;

export const Ol = ({ className, ...rest }: Props) => {
  return <ol className={clsx("pl-8 list-[revert]", className)} {...rest} />;
};
