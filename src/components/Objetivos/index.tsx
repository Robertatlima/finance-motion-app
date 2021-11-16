import CardCabecalhoObjetivo from "../CabecalhoObjetivo";
import CardObjetivo from "../CardObjetivo";
import { ObjetivosContainer } from "./styles";

const Objetivos = () => {
  return (
    <ObjetivosContainer>
      <CardCabecalhoObjetivo />
      <div className="containerObjetivos">
        <CardObjetivo />
        <CardObjetivo />
        <CardObjetivo />
        <CardObjetivo />
        <CardObjetivo />
        <CardObjetivo />
      </div>
    </ObjetivosContainer>
  );
};

export default Objetivos;
