import { compareByDepth } from "framer-motion/types/render/utils/compare-by-depth";
import { useEffect, useState } from "react";
import { useLancamentos } from "../../Provider/Lancamentos";
import { useUser } from "../../Provider/UserProvider";
import api from "../../services/api";
import CardCabecalhoObjetivo from "../CabecalhoObjetivo";
import CardObjetivo from "../CardObjetivo";
import { ObjetivosContainer } from "./styles";

interface objetivoProps {
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
  prazo: number;
}

const Objetivos = () => {
  const [objetivos, setObjetivos] = useState<objetivoProps[]>([]);
  const [objetivoFiltrado, setObjetivoFiltrado] = useState<objetivoProps[]>([]);
  const { userToken, user } = useUser();
  const { lancamentos } = useLancamentos();

  const listarObjetivos = () => {
    api
      .get(`extrato?userId=${user.id}&tipo=objetivo`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        setObjetivos(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    listarObjetivos();
  }, [lancamentos]);

  return (
    <ObjetivosContainer>
      <CardCabecalhoObjetivo />
      <div className="containerObjetivos">
        {objetivos.map((item) => {
          return <CardObjetivo key={item.id} objetivo={item} />;
        })}
      </div>
    </ObjetivosContainer>
  );
};

export default Objetivos;
