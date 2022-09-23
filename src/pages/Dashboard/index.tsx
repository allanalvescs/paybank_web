import { Header } from "../../components/Header";
import { FormLoan } from "./Form";

export function Dashboard() {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header />

      <main className="flex flex-col items-center mt-16">
        <h1 className="font-extralight text-zinc-700 text-4xl">
          Simule e Solicite o seu empréstimo
        </h1>

        <div className="mt-8 flex flex-col items-center">
          <h2 className="font-bold text-lg mb-6">
            Preencha o formulário abaixo para simular
          </h2>

          <FormLoan />

          <h2 className="font-bold text-lg mt-24">
            Veja a simulação do empréstimo antes de efetivar
          </h2>

          <div className="mt-11 rounded border-2 border-zinc-300 w-[752px] ">
            <div className="bg-blue-500 rounded-t-md py-6 px-16">
              <div className="flex flex-wrap w-[552px] justify-between">
                <div className="flex flex-col items-start justify-center mb-16">
                  <label className="text-zinc-50 ">VALOR REQUERIDO</label>
                  <span className="font-extrabold text-white">
                    R$ 60.000,00
                  </span>
                </div>
                <div className="flex flex-col items-start justify-center mb-16">
                  <label className="text-zinc-50 ">VALOR REQUERIDO</label>
                  <span className="font-extrabold text-white">
                    R$ 60.000,00
                  </span>
                </div>
                <div className="flex flex-col items-start justify-center mb-16">
                  <label className="text-zinc-50 ">VALOR REQUERIDO</label>
                  <span className="font-extrabold text-white">
                    R$ 60.000,00
                  </span>
                </div>
                <div className="flex flex-col items-start justify-center mb-6">
                  <label className="text-zinc-50 ">VALOR REQUERIDO</label>
                  <span className="font-extrabold text-white">
                    R$ 60.000,00
                  </span>
                </div>
                <div className="flex flex-col items-start justify-center mb-6">
                  <label className="text-zinc-50 ">VALOR REQUERIDO</label>
                  <span className="font-extrabold text-white">
                    R$ 60.000,00
                  </span>
                </div>
                <div className="flex flex-col items-start justify-center mb-6">
                  <label className="text-zinc-50 ">VALOR REQUERIDO</label>
                  <span className="font-extrabold text-white">
                    R$ 60.000,00
                  </span>
                </div>
              </div>
            </div>

            <h3 className="text-start mt-12 text-zinc-500 w-[100%] pl-16">
              PROJEÇÃO DAS PARCELAS
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
}
