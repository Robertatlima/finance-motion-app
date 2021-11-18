import { CardExtratoResumidoContainer } from "./styles";

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

interface ObjLancamento {
  lancamento: Lancamento;
}

const CardExtratoResumido = ({ lancamento }: ObjLancamento) => {
  return (
    <>
      {lancamento && (
        <CardExtratoResumidoContainer tipo={lancamento.tipo}>
          <div className="innerContainer">
            <p>{lancamento.nome}</p>
            <p>R$ {lancamento.valor.toFixed(2)}</p>
          </div>
          <p>
            {lancamento.dia}/{lancamento.mes}/{lancamento.ano}
          </p>
        </CardExtratoResumidoContainer>
      )}
    </>
  );
};
export default CardExtratoResumido;
