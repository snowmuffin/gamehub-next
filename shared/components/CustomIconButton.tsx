import React from "react";
import { IconButton, IconButtonProps, Tooltip } from "@mui/material";

interface CustomIconButtonProps extends IconButtonProps {
  tooltip?: string;
  children?: React.ReactNode; // Optional override
  // Additional props
  icon?: React.ReactNode;
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({
  tooltip,
  children,
  icon,
  ...props
}) => {
  const button = (
    <IconButton
      {...props}
      sx={{
        "&:hover": {
          backgroundColor: "action.hover"
        },
        ...props.sx
      }}
    >
      {icon || children}
    </IconButton>
  );

  if (tooltip) {
    return <Tooltip title={tooltip}>{button}</Tooltip>;
  }

  return button;
};

export default CustomIconButton;
