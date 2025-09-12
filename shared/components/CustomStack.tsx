import React from "react";
import { Stack, StackProps } from "@mui/material";

interface CustomStackProps extends StackProps {
  children: React.ReactNode;
  // Additional props
  fullHeight?: boolean;
  fullWidth?: boolean;
  row?: boolean;
  gap?: number;
}

const CustomStack: React.FC<CustomStackProps> = ({
  children,
  spacing = 2,
  direction = "column",
  fullHeight = false,
  fullWidth = false,
  row = false,
  gap,
  ...props
}) => {
  return (
    <Stack
      spacing={gap !== undefined ? gap : spacing}
      direction={row ? "row" : direction}
      sx={{
        ...(fullHeight && { height: "100%" }),
        ...(fullWidth && { width: "100%" }),
        ...props.sx
      }}
      {...props}
    >
      {children}
    </Stack>
  );
};

export default CustomStack;
