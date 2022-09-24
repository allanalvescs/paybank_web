import { useLoan } from "../../Providers/Loan";
import { InforItem } from "./InforItem";

export function InforTable() {
  const { months, rate, data, loans } = useLoan();

  const totalToPay = loans.reduce((value, loan) => {
    return value + Number(loan.value_rate);
  }, 0);

  const totalRateFess = loans.reduce((value, loan) => {
    return value + Number(loan.fees);
  }, 0);

  return (
    <div className="bg-blue-500 rounded-t-md py-6 px-16">
      <div className="flex flex-wrap w-[552px] justify-between">
        <InforItem
          label="VALOR REQUERIDO"
          value={data.loan.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        />
        <InforItem label="TAXA DE JUROS" value={`${rate.toFixed(2)}% ao mês`} />
        <InforItem
          label="VALOR DA PARCELA"
          value={data.value_month.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        />
        <InforItem
          label="TOTAL DE MESES PARA QUITAR"
          value={`${months} meses`}
        />
        <InforItem
          label="TOTAL DE JUROS"
          value={totalRateFess.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        />
        <InforItem
          label="TOTAL A PAGAR"
          value={totalToPay.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        />
      </div>
    </div>
  );
}
