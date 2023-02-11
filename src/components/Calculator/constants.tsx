import { IconAddition } from "../icons/IconAddition";
import { IconAdditionSubtraction } from "../icons/IconAdditionSubtraction";
import { IconC } from "../icons/IconC";
import { IconCE } from "../icons/IconCE";
import { IconComma } from "../icons/IconComma";
import { IconDivision } from "../icons/IconDivision";
import { IconEight } from "../icons/IconEight";
import { IconEqual } from "../icons/IconEqual";
import { IconFive } from "../icons/IconFive";
import { IconFour } from "../icons/IconFour";
import { IconMultiplication } from "../icons/IconMultiplication";
import { IconNine } from "../icons/IconNine";
import { IconOne } from "../icons/IconOne";
import { IconPercentual } from "../icons/IconPercentual";
import { IconSeven } from "../icons/IconSeven";
import { IconSix } from "../icons/IconSix";
import { IconSubtraction } from "../icons/IconSubtraction";
import { IconTree } from "../icons/IconTree";
import { IconTwo } from "../icons/IconTwo";
import { IconZero } from "../icons/IconZero";
import { ICalculatorButtonProps } from "./types";

export const BUTTON_OPTIONS: ICalculatorButtonProps[] = [
  {
    id: "CE",
    icon: <IconCE />,
    textColor: "text-custom-zinc-400",
  },
  {
    id: "C",
    icon: <IconC />,
  },
  {
    id: "%",
    icon: <IconPercentual />,
  },
  {
    id: "/",
    icon: <IconDivision />,
    backgroundColor: "bg-custom-zinc-600",
  },
  {
    id: "7",
    icon: <IconSeven />,
  },
  {
    id: "8",
    icon: <IconEight />,
  },
  {
    id: "9",
    icon: <IconNine />,
  },
  {
    id: "*",
    icon: <IconMultiplication />,
    backgroundColor: "bg-custom-zinc-600",
  },
  {
    id: "4",
    icon: <IconFour />,
  },
  {
    id: "5",
    icon: <IconFive />,
  },
  {
    id: "6",
    icon: <IconSix />,
  },
  {
    id: "-",
    icon: <IconSubtraction />,
    backgroundColor: "bg-custom-zinc-600",
  },
  {
    id: "1",
    icon: <IconOne />,
  },
  {
    id: "2",
    icon: <IconTwo />,
  },
  {
    id: "3",
    icon: <IconTree />,
  },
  {
    id: "+",
    icon: <IconAddition />,
    backgroundColor: "bg-custom-zinc-600",
  },
  {
    id: "+/-",
    icon: <IconAdditionSubtraction />,
  },
  {
    id: "0",
    icon: <IconZero />,
  },
  {
    id: ",",
    icon: <IconComma />,
  },
  {
    id: "=",
    icon: <IconEqual />,
    backgroundColor: "bg-custom-zinc-400",
  },
];
