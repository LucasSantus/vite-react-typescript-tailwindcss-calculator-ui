interface IconSubtractionProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const IconSubtraction = (props: IconSubtractionProps) => (
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
      d="M3.5 14c0-.483.392-.875.875-.875h19.25a.875.875 0 010 1.75H4.375A.875.875 0 013.5 14z"
      fill="currentColor"
    />
  </svg>
);
