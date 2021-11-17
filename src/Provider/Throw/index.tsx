import { AxiosResponse } from "axios";
import {
  createContext,
  useCallback,
  useState,
  useContext,
  ReactNode,
} from "react";

import api from "../../services/api";

interface ThrowProviderProps {
  children: ReactNode;
}
interface Throw {
  id: string;
  nome: string;
  mes: number;
  dia: number;
  ano: number;
  valor: number;
  categoria: string;
  tipo: string;
  userId: string;
}

interface ThrowContextData {
  throws: Throw[];
  createThrow: (data: Throw, accessToken: string) => Promise<void>;
}

const ThrowContext = createContext<ThrowContextData>({} as ThrowContextData);

const useThrow = () => {
  const context = useContext(ThrowContext);

  if (!context) {
    throw new Error("UseThrow must be uses within an throwProvider");
  }
  return context;
};

const ThrowProvider = ({ children }: ThrowProviderProps) => {
  const [throws, setThrows] = useState<Throw[]>([]);

  const createThrow = useCallback(async (data: Throw, accessToken: string) => {
    api
      .post("extrato", data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response: AxiosResponse<Throw>) =>
        setThrows([...throws, response.data])
      )
      .catch((err) => console.log(ErrorEvent));
  }, []);

  // const deleteThrow = useCallback(
  // async (throwId: String, accessToken: string) => {
  // api
  // .delete(`extrato/${throwId}`, {
  // headers: {
  // Authorization: `Bearer ${accessToken}`,
  // },
  // })
  // .then((_) => {
  // const filteredThrow = throws.filter(
  // (throww) => throww.id !== throwId
  // );
  // setThrows(filteredThrow);
  // })
  // .catch((err) => console.log(err));
  // },
  // [throws]
  // );

  return (
    <ThrowContext.Provider value={{ createThrow, throws }}>
      {children}
    </ThrowContext.Provider>
  );
};
export { useThrow, ThrowProvider };
