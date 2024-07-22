import { BUTTON_VARIANTS } from "@constants";
import { ITMDBLink } from "@type/uiTypes";
import Link from "next/link";
import { memo } from "react";

export const TMDBLink = memo(
  ({
    href,
    children,
    className,
    replace = false,
    scroll = false,
    prefetch = false,
    external = false,
    severity = BUTTON_VARIANTS.PRIMARY,
    link = true,
    outline = false,
    rounded = false,
  }: ITMDBLink) => {
    const getSeverityClassName = (): string => {
      return link
        ? linkVariantTextClass(severity)
        : outline
          ? outlineBtnVariantClass(severity)
          : normalBtnVariantClass(severity);
    };

    const linkVariantTextClass = (variant: string): string => {
      switch (variant) {
        case BUTTON_VARIANTS.LIGHT:
          return "text-white";
        case BUTTON_VARIANTS.DARK:
          return "text-black-light";
        default:
          return `text-${variant}`;
      }
    };

    const normalBtnVariantClass = (variant: string): string => {
      switch (variant) {
        case BUTTON_VARIANTS.LIGHT:
          return "bg-white border-white text-black-light";
        case BUTTON_VARIANTS.DARK:
          return "bg-black-light border-black-light text-white";
        default:
          return `bg-${variant} border-${variant} text-white`;
      }
    };

    const outlineBtnVariantClass = (variant: string): string => {
      switch (variant) {
        case BUTTON_VARIANTS.LIGHT:
          return "border-white text-white hover:bg-white hover:border-white hover:text-black-light";
        case BUTTON_VARIANTS.DARK:
          return "border-black-light text-black-light hover:bg-black-light hover:border-black-light hover:text-white";
        default:
          return `border-${variant} text-${variant} hover:bg-${variant} hover:border-${variant} hover:text-white`;
      }
    };

    const getClassName = (): string => {
      const baseClasses = `cursor-pointer transition-all duration-300 ${className} ${getSeverityClassName()}`;
      const outlineClass = !link && outline ? "bg-transparent" : "";
      const linkClasses = !link
        ? `border border-solid no-underline text-center relative select-none px-4 py-3 inline-flex items-center ${
            rounded ? "rounded-3xl " : "rounded-sm "
          }`
        : " ";

      return `${baseClasses} ${linkClasses} ${outlineClass}`;
    };

    return external ? (
      <a
        href={typeof href === "string" ? href : "#"}
        target="_blank"
        rel="noreferrer"
        className={getClassName()}
      >
        {children}
      </a>
    ) : (
      <Link
        href={href}
        replace={replace}
        scroll={scroll}
        prefetch={prefetch}
        className={getClassName()}
      >
        {children}
      </Link>
    );
  },
);

TMDBLink.displayName = "TMDBLink";
