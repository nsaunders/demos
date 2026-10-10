import { mergeStyles, on, disable, enable, not, or } from "./css";

export const cycle = (
  flag: Extract<Parameters<typeof on>[0], `%${string}`>,
  ...flags: Extract<Parameters<typeof on>[0], `%${string}`>[]
) =>
  [flag, ...flags].reduce(
    (acc, flag, i, flags) =>
      mergeStyles(
        acc,
        on(flag, enable(flags[i >= flags.length - 1 ? 0 : i + 1])),
      ),
    mergeStyles(
      disable(flag, ...flags),
      on(not(or(flag, ...flags)), enable(flag)),
    ),
  );
