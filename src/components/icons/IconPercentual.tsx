interface IconPercentualProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const IconPercentual = (props: IconPercentualProps) => (
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
      d="M22.494 5.506a.875.875 0 010 1.238l-15.75 15.75a.875.875 0 01-1.238-1.238l15.75-15.75a.875.875 0 011.238 0zM8.313 6.125a2.188 2.188 0 100 4.375 2.188 2.188 0 000-4.375zM4.374 8.313a3.938 3.938 0 117.875 0 3.938 3.938 0 01-7.875 0zM19.688 17.5a2.188 2.188 0 100 4.375 2.188 2.188 0 000-4.375zm-3.938 2.188a3.938 3.938 0 117.875 0 3.938 3.938 0 01-7.875 0z"
      fill="currentColor"
    />
  </svg>
);
