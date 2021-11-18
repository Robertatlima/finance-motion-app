import Button from "../Button";
import CardExtratoResumido from "../CardExtratoResumido";
import CardSaldoGeral from "../CardSaldoGeral";
import { ExtratoResumidoContainer } from "./styles";

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

interface ResumidodoProps {
  setExtrato: (value: boolean) => void;
  lancamentos: Lancamento[];
}

const ExtratoResumido = ({ setExtrato, lancamentos }: ResumidodoProps) => {
  return (
    <ExtratoResumidoContainer>
      <CardSaldoGeral />
      <br />
      <p>Movimentação</p>
      <br />
      {lancamentos && (
        <>
          <CardExtratoResumido
            lancamento={lancamentos[lancamentos.length - 1]}
          />
          <CardExtratoResumido
            lancamento={lancamentos[lancamentos.length - 2]}
          />
          <CardExtratoResumido
            lancamento={lancamentos[lancamentos.length - 3]}
          />
        </>
      )}

      <Button secondary fullWidth onClick={() => setExtrato(true)}>
        Detalhar
      </Button>
    </ExtratoResumidoContainer>
  );
};
export default ExtratoResumido;
