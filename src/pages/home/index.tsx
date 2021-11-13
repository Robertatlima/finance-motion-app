import { useHistory } from "react-router";
import Logo from "../../components/logo";
import { Container } from "./styles";
import Button from "../../components/Button";
const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <Logo />
      <p>
        Organize seu dinheiro em tempo real em uma solução completa, prática e
        segura.
      </p>

      <Button fullWidth onClick={() => history.push("/register")}>
        Criar minha conta
      </Button>

      <Button disable fullWidth onClick={() => history.push("/login")}>
        Já sou cadastrado
      </Button>
    </Container>
  );
};

export default Home;
