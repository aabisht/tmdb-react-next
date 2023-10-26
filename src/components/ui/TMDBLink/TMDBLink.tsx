import { ITMDBLink } from "@type/uiTypes";
import Link from "next/link";

export const TMDBLink = ({
  href,
  children,
  className,
  replace = false,
  scroll = false,
  prefetch = false,
  external = false,
}: ITMDBLink) => {
  return external ? (
    <a
      href={typeof href === "string" ? href : ""}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
    <Link
      className={className}
      href={href}
      replace={replace}
      scroll={scroll}
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
};
