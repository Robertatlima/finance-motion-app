import { LinearProgress } from "@material-ui/core";
import { Container } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faMapMarkerAlt} />;

const CardObjetivo = () => {
  return (
    <Container>
      <div>
        <h4>Nome do Objetivo</h4>
      </div>
      <div className="lista__valores__Objetivo">
        <div className="col__left">
          <div>Categoria</div>
          <div>Valor</div>
        </div>
        <div className="col__right">
          <div>Habitação</div>
          <div>R$ 10000,00</div>
        </div>
      </div>
      <div className="progress">
        <LinearProgress
          variant="determinate"
          color="success"
          value={50}
          style={{ width: "100%" }}
        />
        <span className="marcador__mapa">{element}</span>
        <span className="aviso">Está quase lá</span>
      </div>
    </Container>
  );
};

export default CardObjetivo;
