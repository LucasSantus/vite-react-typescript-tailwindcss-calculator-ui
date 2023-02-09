import { classNames } from "../../../utils/classNames";
import "./../styles.css";

export interface ICalculatorButtonProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string;
}

export const CalculatorButton = ({
  text,
  backgroundColor = "bg-custom-zinc-900",
  textColor = "text-white",
  fontSize = "text-2xl",
}: ICalculatorButtonProps) => {
  return (
    <button
      className={classNames(
        "w-16 h-16 rounded-full flex justify-center items-center shadow-button-calculator hover:opacity-60",
        backgroundColor
      )}
    >
      <span className={classNames("font-normal", textColor, fontSize)}>
        {text}
      </span>
    </button>
  );
};
