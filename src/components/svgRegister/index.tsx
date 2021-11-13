import imgRegister from "../../assets/imgRegister.png";
import { Container } from "./styles";

const SvgRegister = () => {
  return (
    <Container>
      <p>
        <span>De o Primeiro passo para mudar a sua vida</span>, não deixe para
        depois o que pode começar agora!!
      </p>
      <img src={imgRegister} alt="img login" />
    </Container>
  );
};
export default SvgRegister;
