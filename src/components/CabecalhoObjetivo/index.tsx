import { Container } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
import { Dialog } from "@material-ui/core";
import { useState } from "react";
import FormObjetivo from "../ModalObjetivo";
const element = <FontAwesomeIcon icon={faMoneyCheckAlt} />;

const CardCabecalhoObjetivo = () => {
  const [insertModal, setInsertModal] = useState(false);
  const handleClickInsertModal = () => setInsertModal(true);
  const handleClickCloseInsertModal = () => setInsertModal(false);

  return (
    <Container>
      <div className="cabecalhoObjetivos">
        <div>
          <h3>Objetivos</h3>
        </div>
        <div className="icon" onClick={handleClickInsertModal}>
          {element}
        </div>
        <Dialog open={insertModal} onClose={handleClickCloseInsertModal}>
          <FormObjetivo
            handleClickCloseInsertModal={handleClickCloseInsertModal}
          />
        </Dialog>
      </div>
    </Container>
  );
};

export default CardCabecalhoObjetivo;
