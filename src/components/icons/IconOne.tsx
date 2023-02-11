interface IconOneProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const IconOne = (props: IconOneProps) => (
  <svg
    width={9}
    height={17}
    viewBox="0 0 9 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.491 17a.606.606 0 01-.408-.144.606.606 0 01-.144-.408V3.008L1.955 6.08a.559.559 0 01-.408.12.509.509 0 01-.36-.216l-.624-.792a.64.64 0 01-.12-.432.606.606 0 01.24-.36L5.915.368a.77.77 0 01.312-.144A1.9 1.9 0 016.54.2h1.224a.48.48 0 01.384.168.519.519 0 01.144.384v15.696c0 .16-.048.296-.144.408a.519.519 0 01-.384.144H6.491z"
      fill="currentColor"
    />
  </svg>
);
