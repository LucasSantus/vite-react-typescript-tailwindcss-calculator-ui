import { classNames } from "../../../utils/classNames";
import { ICalculatorButtonProps } from "../types";

const DEFAULT_BACKGROUND_COLOR = "bg-custom-zinc-900";
const DEFAULT_TEXT_COLOR = "text-white";

export const CalculatorButton = ({
  icon,
  backgroundColor = DEFAULT_BACKGROUND_COLOR,
  textColor = DEFAULT_TEXT_COLOR,
  ...props
}: ICalculatorButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        "w-16 h-16 rounded-full flex justify-center items-center shadow-button-calculator hover:opacity-60 font-normal",
        backgroundColor,
        textColor
      )}
    >
      {icon}
    </button>
  );
};
