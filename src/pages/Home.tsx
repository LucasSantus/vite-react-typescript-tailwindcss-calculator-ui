import { FC } from "react";
import { Calculator } from "../components/Calculator";

export const Home: FC = () => {
  return (
    <div className="w-screen h-screen bg-[#807ECE] flex justify-center items-center">
      <Calculator />
    </div>
  );
};
