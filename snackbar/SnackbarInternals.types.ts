import { SnackBarProps, SnackBarClasses, Announcement } from "./SnackBar.types";

export interface CloseButtonProps {
  classNames: SnackBarClasses;
  onClose: () => void;
  variant: "default" | "super_large";
}

export interface DefaultVariantProps {
  id?: string;
  classNames: SnackBarClasses;
  variant: SnackBarProps["variant"];
  activeAnnouncement: Announcement | undefined;
  closable: boolean;
  messageText: string;
  onClose: () => void;
}

export interface SuperLargeVariantProps {
  id?: string;
  classNames: SnackBarClasses;
  variant: SnackBarProps["variant"];
  activeAnnouncement: Announcement | undefined;
  closable: boolean;
  messageText: string;
  onClose: () => void;
}
