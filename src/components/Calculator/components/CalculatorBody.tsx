import { PropsWithChildren } from "react";

export const CalculatorBody = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-[22.3rem] h-[35.4rem] bg-[#2D2A37] rounded-[48px] p-5">
      <div>{children}</div>
    </div>
  );
};
