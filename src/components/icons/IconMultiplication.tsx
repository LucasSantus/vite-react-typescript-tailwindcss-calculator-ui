interface IconMultiplicationProps
  extends React.ComponentPropsWithoutRef<"svg"> {}

export const IconMultiplication = (props: IconMultiplicationProps) => (
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
      d="M22.494 5.506a.875.875 0 010 1.238l-15.75 15.75a.875.875 0 01-1.238-1.238l15.75-15.75a.875.875 0 011.238 0z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.506 5.506a.875.875 0 011.238 0l15.75 15.75a.875.875 0 11-1.238 1.238L5.506 6.744a.875.875 0 010-1.238z"
      fill="currentColor"
    />
  </svg>
);
