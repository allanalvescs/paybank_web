import { useLoan } from "../../Providers/Loan";
import { RowTable } from "./RowTable";

export function Table() {
  const { loans } = useLoan();
  return (
    <table className="border-collapse w-[100%]">
      <thead>
        <tr className="px-4 py-2 h-9">
          <th className="text-base border-b-2 border-zinc-700">
            SALDO DEVEDOR
          </th>
          <th className="text-base border-b-2 border-zinc-700">JUROS</th>
          <th className="text-base border-b-2 border-zinc-700">
            SALDO DEVEDOR AJUSTADO
          </th>
          <th className="text-base border-b-2 border-zinc-700">
            VALOR DA PARCELA
          </th>
        </tr>
      </thead>

      <tbody>
        {loans.map((value) => (
          <RowTable
            key={value.fees}
            debit_balance={Number(value.debit_balance)}
            fees={Number(value.fees)}
            adjusted_debt_balance={Number(value.adjusted_debt_balance)}
            value_rate={Number(value.value_rate)}
          />
        ))}

        <tr className="h-11 border-b-2 border-zinc-500">
          <td className="text-center text-lg font-medium text-zinc-400">0</td>
          <td className="text-center text-lg font-medium text-zinc-400">-</td>
          <td className="text-center text-lg font-medium text-zinc-400">-</td>
          <td className="text-center text-lg font-medium text-zinc-400">--</td>
        </tr>
      </tbody>
    </table>
  );
}
