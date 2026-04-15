# SnackBar Refactor Exercise

This repository contains a simplified SnackBar component that has grown organically over time.

Your task is to **refactor the code for readability, maintainability, and scalability**.
This is a refactor-only exercise — you do **not** need to run the code or produce any output.

## Setup

Please run **yarn install** to fix potential linting errors in Snackbar.tsx

## Goals

- Improve code clarity and structure

There is no single “correct” solution.

## Constraints

- **Do not modify `SnackBar.types.ts`**
- You may refactor:
  - `SnackBar.tsx`
  - `SnackBar.variants.ts`
- You may add new files if you feel it improves the design
- Assume this code is used in production

## Deliverable

Clone the repository, refactor the files, and send back the updated code through your own repository link.

Please do not spend more than 90 minutes.

---

## Refactoring Changes Completed

### What Changed

- **Split components into separate files** for better organization and performance
- **Unified message handling** so both variants use the same logic
- **Extracted shared CloseButton** component to avoid duplication (yay for DRYing things up!)
- **Added proper TypeScript interfaces** in dedicated files and improved type safety
- **Simplified announcement logic** to always show first announcement and removed unused state variables and setters

I had initially thought I would make the Snackbar variants have a base variant that shared more code, but since they are structurally somewhat different I only created a shared component for the close button within them. Future work could include creating separate folders for types and the components, but I've left those in the main /snackbar folder for now.

### File Structure

```
snackbar/
├── Snackbar.tsx                  (main component, now 67 lines)
├── Snackbar.types.ts            (original types - unchanged)
├── SnackbarInternals.types.ts   (new component interfaces)
├── SnackbarVariants.tsx         (DefaultVariant + SuperLargeVariant)
└── CloseButton.tsx              (reusable close button)
```

### Results

- Main component is shorter and focused on state management
- Code has been DRYed up and components can be tested individually
- Easy to add new variants without bloating the main file
- Maintains original functionality
