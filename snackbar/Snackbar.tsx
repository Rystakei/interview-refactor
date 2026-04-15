import React, { useState } from "react";
import { SnackBarProps, Announcement, SnackBarClasses } from "./SnackBar.types";
import { DefaultVariant, SuperLargeVariant } from "./SnackbarVariants";

const SnackBar = ({
  id,
  message,
  announcements = [],
  closable = false,
  variant = "default",
  classNames,
}: SnackBarProps) => {
  const [isVisible, setIsVisible] = useState(true);

  // Always use first announcement since functionality for changing announcements not implemented
  // Previously had idx state but setIdx was never used
  const activeAnnouncement: Announcement | undefined =
    announcements.length > 0 ? announcements[0] : undefined;

  if (isVisible === false || isVisible === null) {
    return null;
  }

  const getMessageText = (): string => {
    if (activeAnnouncement && activeAnnouncement.message) {
      return activeAnnouncement.message;
    }
    return message || "";
  };

  const CloseSnackBar = () => {
    setIsVisible(false);
  };

  const messageText = getMessageText();

  if (variant === "super_large") {
    return (
      <SuperLargeVariant
        id={id}
        activeAnnouncement={activeAnnouncement}
        variant={variant}
        classNames={classNames}
        closable={closable}
        messageText={messageText}
        onClose={CloseSnackBar}
      />
    );
  }

  /**
   * Default variant
   */
  return (
    <DefaultVariant
      id={id}
      classNames={classNames}
      variant={variant}
      activeAnnouncement={activeAnnouncement}
      closable={closable}
      messageText={messageText}
      onClose={() => setIsVisible(false)}
    />
  );
};

export default SnackBar;
