import svgLogin from "../../assets/svgLogin.svg";
import { Container } from "./styles";

const SvgLogin = () => {
  return (
    <Container>
      {" "}
      <img src={svgLogin} alt="img login" />{" "}
      <p>
        {" "}
        <span>Fique livre para pensar</span>, nós planejamos para você!{" "}
      </p>{" "}
    </Container>
  );
};
export default SvgLogin;
