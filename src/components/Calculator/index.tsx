import { classNames } from "../../utils/classNames";
import { IconEqual } from "../icons/IconEqual";
import { CalculatorBody } from "./components/CalculatorBody";
import { CalculatorButton } from "./components/CalculatorButton";
import { BUTTON_OPTIONS } from "./constants";

interface ICalculatorProps {}

export const Calculator: React.FC<ICalculatorProps> = ({}) => {
  return (
    <CalculatorBody>
      <div className="h-[86] w-full px-8 pt-4">
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
        <div className="flex justify-between items-center">
          <div className="text-4xl text-custom-zinc-400 items-end">
            <IconEqual />
          </div>

          <input
            type="text"
            className="bg-transparent text-custom-gray-200 text-4xl w-full focus:outline-none text-right"
            placeholder="2"
            disabled
          />
        </div>
      </div>

      <div className="flex justify-center items-center w-full pt-10">
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {BUTTON_OPTIONS.map(({ id, icon, textColor, backgroundColor }) => (
            <CalculatorButton
              key={id}
              id={id}
              icon={icon}
              backgroundColor={backgroundColor}
              textColor={textColor}
              aria-label={classNames("aria", id)}
            />
          ))}
        </div>
      </div>
    </CalculatorBody>
  );
};
