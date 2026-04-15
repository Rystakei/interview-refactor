import React from "react";
import {
  DefaultVariantProps,
  SuperLargeVariantProps,
} from "./SnackbarInternals.types";
import CloseButton from "./CloseButton";

export const DefaultVariant = ({
  id,
  classNames,
  variant,
  activeAnnouncement,
  closable,
  messageText,
  onClose,
}: DefaultVariantProps) => {
  return (
    <section className={classNames.root} data-id={id} data-variant={variant}>
      <div className={classNames.container}>
        <div className={classNames.content}>
          {activeAnnouncement?.overline && (
            <div className={classNames.overline}>
              {activeAnnouncement.overline}
            </div>
          )}

          <div className={classNames.message}>{messageText}</div>
        </div>

        {closable && (
          <CloseButton
            classNames={classNames}
            onClose={onClose}
            variant="default"
          />
        )}
      </div>
    </section>
  );
};

export const SuperLargeVariant = ({
  id,
  classNames,
  variant,
  activeAnnouncement,
  closable,
  messageText,
  onClose,
}: SuperLargeVariantProps) => {
  return (
    <section className={classNames.root} data-id={id} data-variant={variant}>
      <div className={classNames.container}>
        <header className="mb-2">
          <div className={classNames.overline}>
            {activeAnnouncement?.overline || "Announcement"}
          </div>
        </header>

        <div className="flex flex-col gap-4">
          <div className={classNames.message}>{messageText}</div>

          {closable && (
            <CloseButton
              classNames={classNames}
              onClose={onClose}
              variant="super_large"
            />
          )}
        </div>
      </div>
    </section>
  );
};
