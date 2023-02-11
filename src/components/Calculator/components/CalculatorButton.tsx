import { classNames } from "../../../utils/classNames";
import { ICalculatorButtonProps } from "../types";

export const CalculatorButton = ({
  icon,
  backgroundColor = "bg-custom-zinc-900",
  textColor = "text-white",
  fontSize = "text-2xl",
  ...props
}: ICalculatorButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        "w-16 h-16 rounded-full flex justify-center items-center shadow-button-calculator hover:opacity-60 font-normal",
        backgroundColor,
        textColor,
        fontSize
      )}
    >
      {icon}
    </button>
  );
};
