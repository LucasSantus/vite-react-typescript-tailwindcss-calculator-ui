export function classNames(
  ...classes: Array<string | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
