import { FormSingUp } from "./Form";

import { FiChevronRight } from "react-icons/fi";

export function SingUp() {
  return (
    <div className="bg-default-inverse-page flex items-center justify-center h-[100vh]">
      <img
        src="https://www.controlle.com/assets/images/controlle.svg"
        className="absolute top-12 left-11 w-48"
      />

      <a className="absolute top-12 right-24 text-white text-5xl hover:cursor-pointer">
        <FiChevronRight />
      </a>

      <FormSingUp />

      <div className="w-[424px] ml-24">
        <h1 className="text-5xl font-bold text-sky-50 ">
          Controle financeiro facil de usar
        </h1>

        <div className="mt-3">
          <p className="text-white w-[85%] text-base font-medium">
            Profissionalize a gestão financeira do seu negócio e de quebra tenha
            muito mais tempo para focar no crescimento dele.
          </p>
        </div>
        <img
          src="https://www.controlle.com/assets/images/app-controlle.png"
          className="w-40 mt-9"
        />
      </div>
    </div>
  );
}
