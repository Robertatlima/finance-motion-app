import { Container } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
import svgCabecalhoObjetivo from "../../assets/svgCabecalhoObjetivo.svg";


const element = <FontAwesomeIcon icon={faMoneyCheckAlt} />;

const CardCabecalhoObjetivo = () => {
  return (
    <Container>
      <div>
        <div>
            <h3>Objetivos</h3>
        </div>
        <div>{element}</div>
      </div>
    </Container>
  );
};

export default CardCabecalhoObjetivo;
