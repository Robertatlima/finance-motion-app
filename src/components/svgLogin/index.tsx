import svgLogin from "../../assets/svgLogin.svg";
import { Container } from "./styles";

const SvgLogin = () => {
  return (
    <Container>
      {" "}
      <img src={svgLogin} alt="img login" />{" "}
      <p> Fique livre para pensar, nós planejamos para você! </p>{" "}
    </Container>
  );
};
export default SvgLogin;
