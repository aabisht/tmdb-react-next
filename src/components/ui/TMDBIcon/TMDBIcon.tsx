import { ITMDBIcon } from "@type/uiTypes";

export const TMDBIcon = ({
  isOutline = false,
  iconsName,
  className = "",
}: ITMDBIcon) => {
  return (
    <span
      className={`material-icons${isOutline ? "-outlined" : ""} ${className}`}
      aria-hidden="true"
    >
      {iconsName}
    </span>
  );
};
