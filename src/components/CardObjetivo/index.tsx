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
}
interface cardObjetivos{
  objetivo: cardProps;
}
const CardObjetivo = ({objetivo}: cardObjetivos ) => {
  return (
    <Container progresso={`${objetivo.progresso + 4}%`}>
      <div className="__tituloCard">
        <h4>{objetivo.nome}</h4>
      </div>
      <div className="lista__valores__Objetivo">
        <div className="col__left">
          <div>Categoria</div>
          <div>Valor</div>
        </div>
        <div className="col__right">
          <div>{objetivo.categoria}</div>
          <div>R${objetivo.valor}</div>
        </div>
      </div>
      <div className="progress">
        <LinearProgress
          variant="determinate"
          color="success"
          value={objetivo.progresso}
          style={{ width: "100%" }}
        />
        
        <span className="marcador__map">{element}</span>

        <div className='__aviso'>
          <span className="aviso">Quase lá</span>
        </div>
      </div>
    </Container>
  );
};

export default CardObjetivo;
