interface IconCommaProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const IconComma = (props: IconCommaProps) => (
  <svg
    width={6}
    height={8}
    viewBox="0 0 6 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.93 7.7a.58.58 0 01-.468-.216C.366 7.34.33 7.16.354 6.944l.828-5.148c.048-.288.144-.528.288-.72.168-.216.408-.324.72-.324h2.412c.168 0 .3.06.396.18.12.12.18.264.18.432 0 .192-.048.384-.144.576L3.162 6.872c-.096.24-.228.432-.396.576-.144.168-.36.252-.648.252H.93z"
      fill="currentColor"
    />
  </svg>
);
