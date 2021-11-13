import { CardSaldoContainer } from "./styles";
import { BsPlusCircle } from "react-icons/bs";

const CardSaldoGeral = ({ saldoGeral = "R$20.000,00" }) => {
  return (
    <CardSaldoContainer>
      <div className="infoContainer">
        <p>Saldo Geral</p>
        <h3>{saldoGeral}</h3>
      </div>
      <button className="iconContainer">
        <BsPlusCircle />
      </button>
    </CardSaldoContainer>
  );
};
export default CardSaldoGeral;
