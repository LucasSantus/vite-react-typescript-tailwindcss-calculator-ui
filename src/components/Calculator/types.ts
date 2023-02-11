import { ReactNode } from "react";

export interface ICalculatorButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  icon: ReactNode;
  backgroundColor?: string;
  textColor?: string;
}
