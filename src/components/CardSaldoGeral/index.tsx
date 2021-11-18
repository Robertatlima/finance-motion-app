import { CardSaldoContainer } from "./styles";
import { BsPlusCircle } from "react-icons/bs";
import { Dialog } from "@material-ui/core";
import { useState } from "react";
import FormLancamento from "../ModalLancamentos";
const CardSaldoGeral = ({ saldoGeral = "R$20.000,00" }) => {
  const [insertModal, setInsertModal] = useState(false);
  const handleClickInsertModal = () => setInsertModal(true);
  const handleClickCloseInsertModal = () => setInsertModal(false);
  return (
    <CardSaldoContainer>
      <div className="infoContainer">
        <p>Saldo Geral</p>
        <h3>{saldoGeral}</h3>
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
