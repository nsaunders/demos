import { createHooks } from "@css-hooks/react";

export { mergeStyles } from "@css-hooks/react";

export const { styleSheet, on, and, or, not, enable, disable } = createHooks(
  "%primary",
  "%secondary",
  "%tertiary",
);
