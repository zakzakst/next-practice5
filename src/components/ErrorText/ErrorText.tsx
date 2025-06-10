import clsx from "clsx";

export type Props = React.ComponentPropsWithRef<"p">;

export const ErrorText = ({ children, className, ...rest }: Props) => {
  return (
    <p className={clsx("text-dns-16N-130 text-error-1", className)} {...rest}>
      {children}
    </p>
  );
};
