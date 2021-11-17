import Button from "../Button";
import CardExtratoResumido from "../CardExtratoResumido";
import MenuDetalharPeriodo from "../MenuDetalharPeriodo";
import { BsPlusCircle } from "react-icons/bs";
import { ExtratoDetalhadoContainer } from "./styles";

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

interface DetalhadoProps {
  setExtrato: (value: boolean) => void;
  lancamentos: Lancamento[];
}

const ExtratoDetalhado = ({ setExtrato, lancamentos }: DetalhadoProps) => {
  return (
    <ExtratoDetalhadoContainer>
      <MenuDetalharPeriodo />
      <br />
      <p>Movimentação</p>
      <br />
      {lancamentos?.reverse().map((lancamento) => {
        return <CardExtratoResumido lancamento={lancamento} />;
      })}
      <button className="iconContainer">
        <BsPlusCircle />
      </button>
      <Button secondary fullWidth onClick={() => setExtrato(false)}>
        Voltar
      </Button>
    </ExtratoDetalhadoContainer>
  );
};
export default ExtratoDetalhado;
