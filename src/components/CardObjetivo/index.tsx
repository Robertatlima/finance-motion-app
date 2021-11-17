import { LinearProgress } from "@material-ui/core";
import { Container } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faMapMarkerAlt} />;
interface cardProps{
  nome: string;
  valor: number;
  categoria: string;
  progresso: number;
  aviso: string;
}
const CardObjetivo = ({
  nome = "Comprar Casa",
  valor = 200000,
  categoria = "Habitação",
  progresso = 50,
  aviso = "Está quase lá",
}) => {
  return (
    <Container progresso={`${progresso - 2}%`}>
      <div className="__tituloCard">
        <h4>{nome}</h4>
      </div>
      <div className="lista__valores__Objetivo">
        <div className="col__left">
          <div>Categoria</div>
          <div>Valor</div>
        </div>
        <div className="col__right">
          <div>{categoria}</div>
          <div>R${valor}</div>
        </div>
      </div>
      <div className="progress">
        <LinearProgress
          variant="determinate"
          color="success"
          value={progresso}
          style={{ width: "100%" }}
        />
        
        <span className="marcador__map">{element}</span>

        <div className='__aviso'>
          <span className="aviso">{aviso}</span>
        </div>
      </div>
    </Container>
  );
};

export default CardObjetivo;
