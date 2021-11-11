import { createContext, useContext, useState, ReactNode } from "react";
import { History } from "history";
import axios from "axios";

interface AuthProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
}

interface AuthProviderData {
  authToken: string;
  logar: (userData: UserData, history: History) => void;
  registrar: (userData: UserData, history: History) => void;
  deslogar: (history: History) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProps) => {
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const logar = (userData: UserData, history: History) => {
    axios
      .post("https://finance-motion.herokuapp.com/login", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        setAuthToken(response.data.token);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const registrar = (userData: UserData, history: History) => {
    axios
      .post("https://finance-motion.herokuapp.com/register", userData)
      .then(() => {
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  const deslogar = (history: History) => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, deslogar, logar, registrar }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
