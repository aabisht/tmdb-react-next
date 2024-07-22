import { ITMDBIcon } from "@type/uiTypes";
import { memo } from "react";

export const TMDBIcon = memo(
  ({ isOutline = false, iconsName, className = "" }: ITMDBIcon) => {
    const iconClassName = isOutline
      ? "material-icons-outlined"
      : "material-icons";

    return (
      <span
        className={`${iconClassName} ${className}`}
        aria-hidden="true"
        role="img"
        aria-label={iconsName}
        data-testid={`TMDBIcon_${iconsName}`}
      >
        {iconsName}
      </span>
    );
  },
);

TMDBIcon.displayName = "TMDBIcon";
