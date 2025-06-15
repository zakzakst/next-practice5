import clsx from "clsx";

type Props = React.ComponentProps<"ul">;

export const Ul = ({ className, ...rest }: Props) => {
  return <ul className={clsx("pl-8 list-[revert]", className)} {...rest} />;
};
