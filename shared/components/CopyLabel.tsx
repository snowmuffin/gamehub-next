import React, { useState } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { ContentCopy as CopyIcon, Check as CheckIcon } from "@mui/icons-material";

interface CopyLabelProps {
  text?: string; // Optional override
  label?: string;
  variant?: "body1" | "body2" | "caption" | "subtitle1" | "subtitle2";
  maxWidth?: number | string;
  showIcon?: boolean;
  // Additional props
  mainLabel?: any;
  subLabel?: string;
  copyValue?: string;
}

export const CopyLabel: React.FC<CopyLabelProps> = ({
  text = "",
  label,
  variant = "body2",
  maxWidth = 200,
  showIcon = true,
  mainLabel,
  subLabel,
  copyValue
}) => {
  const [copied, setCopied] = useState(false);

  // Use copyValue if provided, otherwise fall back to text
  const textToCopy = copyValue || text || "";
  // Display mainLabel if provided, otherwise fall back to text
  const displayText = mainLabel || text || "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      sx={{
        maxWidth,
        cursor: "pointer",
        "&:hover": {
          opacity: 0.8
        }
      }}
      onClick={handleCopy}
    >
      {(label || subLabel) && (
        <Typography variant="caption" color="text.secondary">
          {label || subLabel}:
        </Typography>
      )}

      <Typography
        variant={variant}
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          flex: 1
        }}
      >
        {displayText}
      </Typography>

      {showIcon && (
        <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
          <IconButton size="small" onClick={handleCopy}>
            {copied ? <CheckIcon fontSize="small" color="success" /> : <CopyIcon fontSize="small" />}
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};
