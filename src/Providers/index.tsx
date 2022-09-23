import { ReactNode } from "react";
import { UserProvider } from "./User/Auth";

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props) {
  return <UserProvider>{children}</UserProvider>;
}
