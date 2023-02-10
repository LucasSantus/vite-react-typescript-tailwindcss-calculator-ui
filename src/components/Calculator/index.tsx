import { CalculatorBody } from "./components/CalculatorBody";
import {
  CalculatorButton,
  ICalculatorButtonProps,
} from "./components/CalculatorButton";

const BUTTONS: ICalculatorButtonProps[] = [
  {
    text: "CE",
    textColor: "text-custom-zinc-400",
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
      <div className="h-[86] w-full p-4">
        <div className="flex justify-end w-full gap-1">
          <span className="text-xl font-normal font-rubik text-custom-gray-600">
            1
          </span>
          <span className="text-xl font-normal font-rubik text-custom-gray-600">
            +
          </span>
          <span className="text-xl font-normal font-rubik text-custom-gray-600">
            1
          </span>
        </div>
        <div className="flex justify-between">
          <div className="text-4xl text-custom-zinc-400">{"="}</div>
          <div className="text-custom-gray-200 text-4xl">2</div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {/* TODO: remover index da key */}
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
