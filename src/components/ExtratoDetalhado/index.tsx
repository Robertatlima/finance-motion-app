import Button from "../Button";
import CardExtratoResumido from "../CardExtratoResumido";
import MenuDetalharPeriodo from "../MenuDetalharPeriodo";
import { BsPlusCircle } from "react-icons/bs";
import { ExtratoDetalhadoContainer } from "./styles";

interface DetalhadoProps {
  setExtrato: (value: boolean) => void;
}

const ExtratoDetalhado = ({ setExtrato }: DetalhadoProps) => {
  return (
    <ExtratoDetalhadoContainer>
        <MenuDetalharPeriodo />
        <br />
        <p>Movimentação</p>
        <br />
        {/* map com todas as entradas usando CardExtratoResumido*/}
        <CardExtratoResumido />
        <CardExtratoResumido nome="Objetivo" tipo="objetivo" />
        <CardExtratoResumido nome="Salário" tipo="entrada" />
        <CardExtratoResumido />
        <CardExtratoResumido nome="Objetivo" tipo="objetivo" />
        <CardExtratoResumido nome="Salário" tipo="entrada" />
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
