interface IconSevenProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const IconSeven = (props: IconSevenProps) => (
  <svg
    width={12}
    height={17}
    viewBox="0 0 12 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.424 17a.488.488 0 01-.36-.144.644.644 0 01-.12-.384c0-.048.016-.12.048-.216L8.968 2.288H1.096a.606.606 0 01-.408-.144.606.606 0 01-.144-.408v-.96C.544.6.592.464.688.368A.555.555 0 011.096.2h9.84c.176 0 .312.056.408.168a.508.508 0 01.168.408v.888c0 .208-.016.376-.048.504s-.08.272-.144.432L5.392 16.4a1.588 1.588 0 01-.24.408c-.096.128-.24.192-.432.192H3.424z"
      fill="currentColor"
    />
  </svg>
);
