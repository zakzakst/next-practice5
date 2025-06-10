import clsx from "clsx";
import { cva } from "class-variance-authority";

export const requirementBadgeOptionalStyle = {
  true: "text-solid-gray-800",
};

const requirementBadgeVariants = cva("text-oln-16N-100 text-red-800", {
  variants: {
    isOptional: requirementBadgeOptionalStyle,
  },
});

type OwnProps = {
  isOptional?: boolean;
};

export type Props = React.ComponentPropsWithRef<"span"> & OwnProps;

export const RequirementBadge = ({
  children,
  className,
  isOptional,
  ...rest
}: Props) => {
  return (
    <span
      className={clsx(requirementBadgeVariants({ isOptional }), className)}
      {...rest}
    >
      {children}
    </span>
  );
};
