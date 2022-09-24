import { ReactNode } from "react";
import { LoanProvider } from "./Loan";
import { UserProvider } from "./User/Auth";

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <UserProvider>
      <LoanProvider>{children}</LoanProvider>
    </UserProvider>
  );
}
