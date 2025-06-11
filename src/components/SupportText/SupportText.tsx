import clsx from "clsx";

type Props = React.ComponentProps<"p">;

export const SupportText = ({ children, className, ...rest }: Props) => {
  return (
    <p
      className={clsx("text-std-16N-170 text-solid-gray-700", className)}
      {...rest}
    >
      {children}
    </p>
  );
};
