interface RowProps {
  debit_balance: number;
  fees: number;
  adjusted_debt_balance: number;
  value_rate: number;
}

export function RowTable({
  debit_balance,
  fees,
  adjusted_debt_balance,
  value_rate,
}: RowProps) {
  return (
    <tr className="h-11 border-b-2 border-zinc-500">
      <td className="text-center text-lg font-medium text-zinc-400">
        {debit_balance.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </td>
      <td className="text-center text-lg font-medium text-zinc-400">
        {fees.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </td>
      <td className="text-center text-lg font-medium text-zinc-400">
        {adjusted_debt_balance.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </td>
      <td className="text-center text-lg font-medium text-zinc-400">
        {value_rate.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </td>
    </tr>
  );
}
