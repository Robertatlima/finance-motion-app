import Button from "../Button";
import CardExtratoResumido from "../CardExtratoResumido";
import MenuDetalharPeriodo from "../MenuDetalharPeriodo";
import { BsPlusCircle } from "react-icons/bs";
import { ExtratoDetalhadoContainer } from "./styles";
import { Dialog } from "@material-ui/core";
import { useState } from "react";
import FormLancamento from "../ModalLancamentos";

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

const ExtratoDetalhado = ({ setExtrato }: DetalhadoProps) => {
  const [insertModal, setInsertModal] = useState(false);
  const handleClickInsertModal = () => setInsertModal(true);
  const handleClickCloseInsertModal = () => setInsertModal(false);
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

      {/* map com todas as entradas usando CardExtratoResumido*/}
      <CardExtratoResumido />
      <CardExtratoResumido nome="Objetivo" tipo="objetivo" />
      <CardExtratoResumido nome="Salário" tipo="entrada" />
      <CardExtratoResumido />
      <CardExtratoResumido nome="Objetivo" tipo="objetivo" />
      <CardExtratoResumido nome="Salário" tipo="entrada" />
      <button className="iconContainer" onClick={handleClickInsertModal}>

        <BsPlusCircle />
      </button>
      <Dialog open={insertModal} onClose={handleClickCloseInsertModal}>
        <FormLancamento
          handleClickCloseInsertModal={handleClickCloseInsertModal}
        />
      </Dialog>
      <Button secondary fullWidth onClick={() => setExtrato(false)}>
        Voltar
      </Button>

    </ExtratoDetalhadoContainer>
  );
};
export default ExtratoDetalhado;
