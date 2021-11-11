import Logo from "../../components/logo";
import { Container } from "./styles";
const Home = () => {
  return (
    <Container>
      <Logo />
      <p>
        Organize seu dinheiro em tempo real em uma solução completa, prática e
        segura.
      </p>

      <button>Criar minha conta</button>
      <button>Já sou cadastrado</button>
    </Container>
  );
};

export default Home;
