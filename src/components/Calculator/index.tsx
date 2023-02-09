import { CalculatorBody } from "./components/CalculatorBody";
import {
  CalculatorButton,
  ICalculatorButtonProps,
} from "./components/CalculatorButton";

const BUTTONS: ICalculatorButtonProps[] = [
  {
    text: "CE",
    textColor: "text-custom-zinc-600",
  },
  {
    text: "C",
  },
  {
    text: "%",
  },
  {
    text: "/",
    backgroundColor: "bg-custom-zinc-600",
  },
  {
    text: "7",
  },
  {
    text: "8",
  },
  {
    text: "9",
  },
  {
    text: "*",
    backgroundColor: "bg-custom-zinc-600",
  },
  {
    text: "4",
  },
  {
    text: "5",
  },
  {
    text: "6",
  },
  {
    text: "-",
    backgroundColor: "bg-custom-zinc-600",
  },
  {
    text: "1",
  },
  {
    text: "2",
  },
  {
    text: "3",
  },
  {
    text: "+",
    backgroundColor: "bg-custom-zinc-600",
  },
  {
    text: "",
  },
  {
    text: "0",
  },
  {
    text: ",",
  },
  {
    text: "=",
    backgroundColor: "bg-custom-zinc-400",
  },
];

export const Calculator = () => {
  return (
    <CalculatorBody>
      {/* TODO: remover index da key */}
      <div className="grid grid-cols-4 gap-4">
        {BUTTONS.map(({ text, textColor, backgroundColor }, index) => (
          <div className="">
            <CalculatorButton
              key={index}
              text={text}
              backgroundColor={backgroundColor}
              textColor={textColor}
            />
          </div>
        ))}
      </div>
    </CalculatorBody>
  );
};
