import { ITMDBIcon } from "@type/uiTypes";

export const TMDBIcon = ({
  isOutline = false,
  iconsName,
  className = "",
}: ITMDBIcon) => {
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
};
