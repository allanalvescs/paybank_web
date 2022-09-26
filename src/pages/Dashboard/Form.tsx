import { Input } from "../../components/Form";
import { LoanData, useLoan } from "../../Providers/Loan";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../Providers/User/Auth";

const loanSchema = yup.object().shape({
  uf: yup.string().required("Campo Obrigatório! *"),
  data_born: yup.string().required("Campo Obrigatório! *"),
  loan: yup
    .number()
    .min(25000, "Empréstimo deve ser realizado com valor no minimo R$25.000,00")
    .required("Campo Obrigatório! *"),
  value_month: yup
    .number()
    .min(5000, "Valor a ser pago deve ser no minimo de R$5000,00")
    .required("Campo Obrigatório! *"),
});

export function FormLoan() {
  const { handleLoanSimulation } = useLoan();
  const { token } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoanData>({
    resolver: yupResolver(loanSchema),
  });

  const handleSubmitLoan = (data: LoanData) => {
    const sendData = {
      ...data,
      loan: Number(data.loan),
      value_month: Number(data.value_month),
    };

    handleLoanSimulation(sendData, token);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitLoan)}
      className="w-[752px] py-9 px-8 bg-white rounded-md border-2 border-zinc-200"
    >
      <select
        {...register("uf")}
        className="mb-6 w-[100%]  h-11 bg-white border-[1px] border-zinc-300 rounded px-4"
        placeholder="UF"
      >
        <option value="">UF</option>
        <option value="MG">MG</option>
        <option value="SP">SP</option>
        <option value="RJ">RJ</option>
        <option value="ES">ES</option>
      </select>
      <Input
        {...register("data_born")}
        error={errors.data_born}
        placeholder="DATA DE NASCIMENTO"
        type="date"
      />
      <Input
        {...register("loan")}
        error={errors.loan}
        type="number"
        placeholder="QUAL O VALOR DO EMPRÉSTIMO"
      />
      <Input
        {...register("value_month")}
        error={errors.value_month}
        type="number"
        placeholder="QUAL VALOR DESEJA PAGAR POR MÊS"
      />

      <button
        type="submit"
        className="text-white font-bold bg-blue-500 w-[100%] h-11 rounded-md hover:bg-blue-600"
      >
        Simular
      </button>
    </form>
  );
}
