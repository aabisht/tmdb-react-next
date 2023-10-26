import { ITMDBButton } from "@type/uiTypes";
import { Button } from "primereact/button";

export const TMDBButton = ({
  badge,
  badgeClassName,
  children,
  disabled = false,
  visible = true,
  loading = false,
  link = false,
  outlined = false,
  icon,
  iconPos = "left",
  loadingIcon,
  pt,
  ptOptions,
  raised = false,
  rounded = false,
  severity,
  size,
  tooltip,
  tooltipOptions,
  unstyled = false,
  ...rest
}: ITMDBButton) => {
  return (
    <Button
      badge={badge}
      badgeClassName={badgeClassName}
      disabled={disabled}
      icon={icon}
      iconPos={iconPos}
      loading={loading}
      loadingIcon={loadingIcon}
      link={link}
      outlined={outlined}
      pt={pt}
      ptOptions={ptOptions}
      raised={raised}
      rounded={rounded}
      severity={severity}
      size={size}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
      unstyled={unstyled}
      visible={visible}
      {...rest}
    >
      {children}
    </Button>
  );
};
