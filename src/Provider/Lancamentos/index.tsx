import { createContext, useState, useContext, ReactNode } from "react";

import api from "../../services/api";
import { useAuth } from "../Auth";
import { useUser } from "../UserProvider";

interface LancamentosProviderProps {
  children: ReactNode;
}
interface Lancamento {
  id: string;
  nome: string;
  mes: number;
  dia: number;
  ano: number;
  valor: number;
  categoria: string;
  progresso: number;
  tipo: string;
  userId: string;
}

interface LancamentosProviderData {
  lancamentos: Lancamento[];
  listarLancamentos: () => void;
}

const LancamentosContext = createContext<LancamentosProviderData>(
  {} as LancamentosProviderData
);

export const LancamentosProvider = ({ children }: LancamentosProviderProps) => {
  const [lancamentos, setLancamentos] = useState([]);
  const { user, userToken } = useUser();

  const listarLancamentos = () => {
    api
      .get(`extrato?userId=${user.id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        setLancamentos(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <LancamentosContext.Provider value={{ lancamentos, listarLancamentos }}>
      {children}
    </LancamentosContext.Provider>
  );
};
export const useLancamentos = () => useContext(LancamentosContext);
