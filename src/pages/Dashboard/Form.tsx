import { Input } from "../../components/Form";

export function FormLoan() {
  return (
    <form className="w-[752px] py-9 px-8 bg-white rounded-md border-2 border-zinc-200">
      <Input name="cpf" placeholder="CPF" />
      <select
        name="UF"
        className="mb-6 w-[100%]  h-11 bg-white border-[1px] border-zinc-300 rounded px-4"
        placeholder="UF"
      >
        <option value="">UF</option>
        <option value="MG">MG</option>
        <option value="SP">SP</option>
        <option value="RJ">RJ</option>
        <option value="ES">ES</option>
      </select>
      <Input name="data_born" placeholder="DATA DE NASCIMENTO" />
      <Input name="loan" placeholder="QUAL O VALOR DO EMPRÉSTIMO" />
      <Input name="value_month" placeholder="QUAL VALOR DESEJA PAGAR POR MÊS" />

      <button
        type="submit"
        className="text-white font-bold bg-blue-500 w-[100%] h-11 rounded-md hover:bg-blue-600"
      >
        Simular
      </button>
    </form>
  );
}
