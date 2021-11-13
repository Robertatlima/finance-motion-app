import { CardExtratoResumidoContainer } from "./styles";

const CardExtratoResumido = ({
  nome = "MercadoKenzie",
  data = "06/11/2021",
  valor = "R$900,00",
  tipo = "saída",
}) => {
  return (
    <CardExtratoResumidoContainer tipo={tipo}>
      <div className="innerContainer">
        <p>{nome}</p>
        <p>{valor}</p>
      </div>
      <p>{data}</p>
    </CardExtratoResumidoContainer>
  );
};
export default CardExtratoResumido;
