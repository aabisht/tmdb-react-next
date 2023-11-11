import { BUTTON_VARIENTS } from "@constants";
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
      case BUTTON_VARIENTS.PRIMARY:
        return link
          ? "text-primary"
          : outline
          ? "border-primary text-primary hover:bg-primary hover:border-primary hover:text-white"
          : "bg-primary border-primary text-white";
      case BUTTON_VARIENTS.SECONDARY:
        return link
          ? "text-secondary"
          : outline
          ? "border-secondary text-secondary hover:bg-secondary hover:border-secondary hover:text-white"
          : "bg-secondary border-secondary text-white";
      case BUTTON_VARIENTS.SUCCESS:
        return link
          ? "text-success"
          : outline
          ? "border-success text-success hover:bg-success hover:border-success hover:text-white"
          : "bg-success border-success text-white";
      case BUTTON_VARIENTS.LIGHT:
        return link
          ? "text-white"
          : outline
          ? "border-white text-white hover:bg-white hover:border-white hover:text-black-light"
          : "bg-white border-white text-black-light";
      case BUTTON_VARIENTS.WARNING:
        return link
          ? "text-warning"
          : outline
          ? "border-warning text-warning hover:bg-warning hover:border-warning hover:text-white"
          : "bg-warning border-warning text-white";
      case BUTTON_VARIENTS.DARK:
        return link
          ? "text-black-light"
          : outline
          ? "border-black-light text-black-light hover:bg-black-light hover:border-black-light hover:text-white"
          : "bg-black-light border-black-light text-white";
      case BUTTON_VARIENTS.DANGER:
        return link
          ? "text-danger"
          : outline
          ? "border-danger text-danger hover:bg-danger hover:border-danger hover:text-white"
          : "bg-danger border-danger text-white";
      default:
        return "";
    }
  };

  const setClassName = (): string => {
    return `cursor-pointer transition-all duration-300 ${
      !link
        ? `border border-solid no-underline text-center relative select-none px-4 py-3 inline-flex items-center ${
            rounded ? "rounded-3xl " : "rounded-sm "
          }`
        : " "
    }${
      !link && outline ? "bg-transaprent " : ""
    }${className} ${getSeverityClassName()}`;
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
