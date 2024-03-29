import { BUTTON_VARIANTS } from "@constants";
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
  severity,
  link = true,
  outline = false,
  rounded = false,
}: ITMDBLink) => {
  const getSeverityClassName = (): string => {
    switch (severity) {
      case BUTTON_VARIANTS.PRIMARY:
        return getClassName("primary");
      case BUTTON_VARIANTS.SECONDARY:
        return getClassName("secondary");
      case BUTTON_VARIANTS.SUCCESS:
        return getClassName("success");
      case BUTTON_VARIANTS.LIGHT:
        return getClassName("light");
      case BUTTON_VARIANTS.WARNING:
        return getClassName("warning");
      case BUTTON_VARIANTS.DARK:
        return getClassName("dark");
      case BUTTON_VARIANTS.DANGER:
        return getClassName("danger");
      default:
        return "";
    }
  };

  const getClassName = (variant: string): string => {
    const baseClassName = link
      ? `text-${variant}`
      : `bg-${variant} border-${variant} text-white`;
    const hoverClassName = `hover:bg-${variant} hover:border-${variant} hover:text-white`;
    const outlineClassName = `border-${variant} text-${variant} ${hoverClassName}`;
    return link
      ? baseClassName
      : outline
        ? outlineClassName
        : `${baseClassName} ${hoverClassName}`;
  };

  const setClassName = (): string => {
    const baseClasses = `cursor-pointer transition-all duration-300 ${className} ${getSeverityClassName()}`;
    const linkClasses = !link
      ? `border border-solid no-underline text-center relative select-none px-4 py-3 inline-flex items-center ${rounded ? "rounded-3xl" : "rounded-sm"}`
      : "";
    const outlineClass = !link && outline ? "bg-transparent" : "";
    return `${baseClasses} ${linkClasses} ${outlineClass}`;
  };

  return external ? (
    <a
      href={typeof href === "string" ? href : ""}
      target="_blank"
      rel="noreferrer"
      className={setClassName()}
    >
      {children}
    </a>
  ) : (
    <Link
      href={href}
      replace={replace}
      scroll={scroll}
      prefetch={prefetch}
      className={setClassName()}
    >
      {children}
    </Link>
  );
};
