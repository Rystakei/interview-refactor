import React from "react";
import { CloseButtonProps } from "./SnackbarInternals.types";

const CloseButton = ({ classNames, onClose, variant }: CloseButtonProps) => {
  const buttonContent = variant === "super_large" ? "Dismiss" : "✕";
  const button = (
    <button
      className={classNames.close}
      onClick={() => onClose()}
      aria-label="Close"
    >
      {buttonContent}
    </button>
  );

  // Super large variant wraps button in flex container
  if (variant === "super_large") {
    return <div className="flex justify-end">{button}</div>;
  }

  // Default variant renders button directly
  return button;
};

export default CloseButton;
