import { CardSaldoContainer } from "./styles";
import { BsPlusCircle } from "react-icons/bs";
import { Dialog } from "@material-ui/core";
import { useState } from "react";
import FormLancamento from "../ModalLancamentos";
import { useLancamentos } from "../../Provider/Lancamentos";
const CardSaldoGeral = () => {
  const [insertModal, setInsertModal] = useState(false);
  const handleClickInsertModal = () => setInsertModal(true);
  const handleClickCloseInsertModal = () => setInsertModal(false);
  const { lancamentos } = useLancamentos();

  const entradas = lancamentos
    .filter((lancamento) => {
      return lancamento.tipo === "entrada";
    })
    .reduce(function (acc, obj) {
      return acc + obj.valor;
    }, 0);
  const saidas = lancamentos
    .filter((lancamento) => {
      return lancamento.tipo === "saída";
    })
    .reduce(function (acc, obj) {
      return acc + obj.valor;
    }, 0);
  const objetivos = lancamentos
    .filter((lancamento) => {
      return lancamento.tipo === "objetivo";
    })
    .reduce(function (acc, obj) {
      return acc + obj.valor;
    }, 0);
  const saldoGeral = entradas - saidas - objetivos;

  return (
    <CardSaldoContainer>
      <div className="infoContainer">
        <p>Saldo Geral</p>
        <h3>R$ {saldoGeral.toFixed(2)}</h3>
      </div>
      <button className="iconContainer" onClick={handleClickInsertModal}>
        <BsPlusCircle />
      </button>
      <Dialog open={insertModal} onClose={handleClickCloseInsertModal}>
        <FormLancamento
          handleClickCloseInsertModal={handleClickCloseInsertModal}
        />
      </Dialog>
    </CardSaldoContainer>
  );
};
export default CardSaldoGeral;
