import { Dialog } from "@material-ui/core";
import { useState } from "react";
import ModalDetalhes from "../ModalDetalhes";
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
  const [openModal, setOpenModal] = useState(false);
  const handleClickOpenModal = () => setOpenModal(true);
  const handleClickCloseModal = () => setOpenModal(false);

  return (
    <>
      {lancamento && (
        <CardExtratoResumidoContainer
          onClick={handleClickOpenModal}
          tipo={lancamento.tipo}
        >
          <div className="innerContainer">
            <p>{lancamento.nome}</p>
            <p>R$ {lancamento.valor.toFixed(2)}</p>
          </div>
          <p>
            {lancamento.dia}/{lancamento.mes}/{lancamento.ano}
          </p>
          <Dialog open={openModal} onClose={handleClickCloseModal}>
            <ModalDetalhes
              openModal={openModal}
              lancamento={lancamento}
              handleClickCloseModal={handleClickCloseModal}
            />
          </Dialog>
        </CardExtratoResumidoContainer>
      )}
    </>
  );
};
export default CardExtratoResumido;
