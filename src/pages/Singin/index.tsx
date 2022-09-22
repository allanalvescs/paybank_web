import { FormSingIn } from "./Form";

export function SingIn() {
  return (
    <div className="bg-default-page flex items-center justify-center h-[100vh]">
      <img
        src="https://www.controlle.com/assets/images/controlle.svg"
        className="absolute top-12 right-11 w-48"
      />
      <div className="w-[424px]">
        <h1 className="text-5xl font-bold text-slate-50 leading-normal">
          SIMULE SEU EMPRÉSTIMO
        </h1>

        <div className="mt-3">
          <p className="text-white w-[85%] text-base">
            Faça uma simulação de um emprestimo analisando o valor de cada
            parcela,juros de acordo com o valor que deseja!
          </p>
        </div>
      </div>

      <FormSingIn />
    </div>
  );
}
