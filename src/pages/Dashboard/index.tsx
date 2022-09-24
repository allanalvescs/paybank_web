import { Header } from "../../components/Header";
import { InforTable } from "../../components/Table/InforTable";
import { Table } from "../../components/Table/table";

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

          <div className="mt-11 mb-36 rounded border-2 border-zinc-300 w-[752px] ">
            <InforTable />

            <div className="w-[100%] m-auto flex flex-col items-center">
              <h3 className="text-start mt-12 mb-4 text-zinc-500 w-[100%] pl-6">
                PROJEÇÃO DAS PARCELAS:
              </h3>

              <Table />

              <button className="w-80 h-12 bg-green-500 text-zinc-50 font-semibold rounded mt-8 mb-8">
                Eftivar o emprestimo
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
