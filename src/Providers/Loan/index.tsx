import { createContext, useContext, useState, ReactNode } from "react";
import { api } from "../../Server/api";

interface LoanProviderProps {
  children: ReactNode;
}

export interface Loan {
  debit_balance: string;
  fees: string;
  adjusted_debt_balance: string;
  value_rate: string;
}

export interface LoanData {
  uf: string;
  data_born: string;
  loan: number;
  value_month: number;
}

interface LoanContextData {
  loans: Loan[];
  months: number;
  rate: number;
  data: StatusLoan;
  handleLoanSimulation(data: LoanData, token: string): Promise<void>;
}

interface StatusLoan {
  dataLoans: Loan[];
  percentual: number;
  data_born: string;
  loan: number;
  value_month: number;
}

const LoanContext = createContext<LoanContextData>({} as LoanContextData);

const useLoan = () => useContext(LoanContext);

function LoanProvider({ children }: LoanProviderProps) {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [rate, setRate] = useState(0);
  const [data, setData] = useState<StatusLoan>(() => {
    const statusLoan = localStorage.getItem("@Controlle:Simulator");

    if (statusLoan) {
      return JSON.parse(statusLoan);
    }

    return {
      dataLoans: [],
      percentual: 0,
      data_born: "",
      loan: 0,
      value_month: 0,
    };
  });

  const handleLoanSimulation = async (data: LoanData, token: string) => {
    try {
      const response = await api.post("/loan", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(response.data);
      setLoans(response.data.dataLoans);
      setRate(response.data.percentual);

      localStorage.setItem(
        "@Controlle:Simulator",
        JSON.stringify(response.data)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoanContext.Provider
      value={{
        handleLoanSimulation,
        data,
        loans,
        months: loans.length,
        rate: rate,
      }}
    >
      {children}
    </LoanContext.Provider>
  );
}

export { LoanProvider, useLoan };
