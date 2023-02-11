interface IconAdditionSubtractionProps
  extends React.ComponentPropsWithoutRef<"svg"> {}

export const IconAdditionSubtraction = (
  props: IconAdditionSubtractionProps
) => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.494 5.506a.875.875 0 010 1.238l-15.75 15.75a.875.875 0 01-1.238-1.238l15.75-15.75a.875.875 0 011.238 0zM2.625 7.875c0-.483.392-.875.875-.875h8.75a.875.875 0 010 1.75H3.5a.875.875 0 01-.875-.875z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.875 2.625c.483 0 .875.392.875.875v8.75a.875.875 0 01-1.75 0V3.5c0-.483.392-.875.875-.875zM14.875 20.125c0-.483.392-.875.875-.875h8.75a.875.875 0 010 1.75h-8.75a.875.875 0 01-.875-.875z"
      fill="currentColor"
    />
  </svg>
);
