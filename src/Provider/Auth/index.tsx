import { createContext, useContext, useState, ReactNode } from "react";
import { History } from "history";
import { toast } from "react-toastify";
import api from "../../services/api";

interface AuthProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
}
interface UserDataRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirmed: string;
}
interface AuthProviderData {
  authToken: string;
  logar: (userData: UserData, history: History) => void;
  registrar: (userData: UserDataRegister, history: History) => void;
  deslogar: (history: History) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProps) => {
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const logar = (userData: UserData, history: History) => {
    api
      .post("login", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        console.log("entrou");
        setAuthToken(response.data.token);
        history.push("/dashboard");
        toast.success("Seja bem vindo (:");
      })
      .catch((err) => toast.error("Email ou senha incorreto"));
  };

  const registrar = (userData: UserDataRegister, history: History) => {
    api
      .post("register", userData)
      .then(() => {
        history.push("/login");
        toast.success("Conta criada com sucesso");
      })
      .catch((err) => toast.error("Conta já cadastrada ou dados inválidos"));
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
