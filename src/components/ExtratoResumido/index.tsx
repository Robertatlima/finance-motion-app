import Button from "../Button";
import CardExtratoResumido from "../CardExtratoResumido";
import CardSaldoGeral from "../CardSaldoGeral";
import { ExtratoResumidoContainer } from "./styles";

interface ResumidodoProps {
  setExtrato: (value: boolean) => void;
}

const ExtratoResumido = ({ setExtrato }: ResumidodoProps) => {
  return (
    <ExtratoResumidoContainer>
      <CardSaldoGeral />
      <br />
      <p>Movimentação</p>
      <br />
      {/* fazer o map com 3 primeiras movimentações */}
      <CardExtratoResumido />
      <CardExtratoResumido nome="Objetivo" tipo="objetivo" />
      <CardExtratoResumido nome="Salário" tipo="entrada" />

      <Button secondary fullWidth onClick={() => setExtrato(true)}>
        Detalhar
      </Button>
    </ExtratoResumidoContainer>
  );
};
export default ExtratoResumido;
