import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../Server/api";

interface UserProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  password: string;
  email: string;
  cel: string;
}

interface UserData {
  user: User;
  token: string;
}

interface UserContextData {
  user: User;
  token: string;
  loading: boolean;
  userSingIn(data: SingInCredentials): Promise<void>;
  singOut(): void;
}

export interface SingInCredentials {
  email: string;
  password: string;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

function UserProvider({ children }: UserProviderProps) {
  const [data, setData] = useState<UserData>(() => {
    const user = localStorage.getItem("@Controlle:user");
    const token = localStorage.getItem("@Controlle:token");

    if (token && user) {
      const convertJsonUser = JSON.parse(user);

      return {
        user: convertJsonUser,
        token,
      };
    }

    return {} as UserData;
  });
  const [loading, setLoaging] = useState(false);

  const history = useHistory();

  const userSingIn = async ({ email, password }: SingInCredentials) => {
    try {
      setLoaging(true);
      const response = await api.post("/user/singin", { email, password });

      setData(response.data);
      localStorage.setItem(
        "@Controlle:user",
        JSON.stringify(response.data.user)
      );
      localStorage.setItem("@Controlle:token", response.data.token);
      setLoaging(false);
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const singOut = () => {
    setData({} as UserData);

    localStorage.clear();

    history.push("/");
  };

  return (
    <UserContext.Provider
      value={{
        user: data.user,
        token: data.token,
        userSingIn,
        singOut,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
