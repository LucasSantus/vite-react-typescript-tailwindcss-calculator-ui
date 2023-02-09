import { PropsWithChildren } from "react";
import "./../styles.css";

export const CalculatorBody = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-[22.3rem] h-[35.4rem] bg-custom-zinc-900 rounded-[48px] p-5 shadow-body-calculator">
      <div>{children}</div>
    </div>
  );
};
