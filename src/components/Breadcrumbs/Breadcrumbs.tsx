import clsx from "clsx";
import { Slot } from "..";

type ItemOwnProps = {
  isCurrent?: boolean;
};

type ItemProps = React.ComponentProps<"li"> & ItemOwnProps;

export const BreadcrumbItem = ({
  isCurrent = false,
  children,
  className,
  ...rest
}: ItemProps) => {
  if (isCurrent) {
  }
  return (
    <li
      aria-current={isCurrent ? "page" : undefined}
      className={clsx(
        "inline break-words",
        { "text-oln-16N-100": isCurrent },
        className
      )}
      {...rest}
    >
      {children}
      {!isCurrent && (
        <svg
          aria-hidden={true}
          className="mx-2 inline"
          fill="none"
          height="12"
          viewBox="0 0 12 12"
          width="12"
          data-testid="breadcrumb-item-icon"
        >
          <path
            d="M4.50078 1.2998L3.80078 1.9998L7.80078 5.9998L3.80078 9.9998L4.50078 10.6998L9.20078 5.9998L4.50078 1.2998Z"
            fill="currentColor"
          />
        </svg>
      )}
    </li>
  );
};

const breadcrumbLinkStyleArr = [
  "text-blue-1000 text-oln-16N-100 underline underline-offset-[calc(3/16*1rem)]",
  "hover:text-blue-900 hover:decoration-[calc(3/16*1rem)]",
  "active:text-orange-700 active:decoration-1",
  "focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:text-blue-1000 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300",
];

type LinkProps = {
  className?: string;
} & (
  | ({ asChild?: false } & React.ComponentProps<"a">)
  | { asChild: true; children: React.ReactNode }
);

export const BreadcrumbLink = ({
  asChild,
  children,
  className,
  ...rest
}: LinkProps) => {
  if (asChild) {
    return (
      <Slot className={clsx(breadcrumbLinkStyleArr, className)} {...rest}>
        {children}
      </Slot>
    );
  }
  return (
    <a className={clsx(breadcrumbLinkStyleArr, className)} {...rest}>
      {children}
    </a>
  );
};

type ListProps = React.ComponentProps<"ol">;

export const BreadcrumbList = ({ children, className, ...rest }: ListProps) => {
  return (
    <ol className={clsx("inline", className)} {...rest}>
      {children}
    </ol>
  );
};

type LabelsProps = React.ComponentProps<"span">;

export const BreadcrumbsLabel = ({
  children,
  className,
  ...rest
}: LabelsProps) => {
  return (
    <span className={className} {...rest}>
      {children}
    </span>
  );
};

type Props = React.ComponentProps<"nav">;

export const Breadcrumbs = ({ children, className, ...rest }: Props) => {
  return (
    <nav className={className} {...rest}>
      {children}
    </nav>
  );
};
