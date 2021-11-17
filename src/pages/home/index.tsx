import { useHistory } from "react-router";
import Logo from "../../components/logo";
import { Container } from "./styles";
import Button from "../../components/Button";
import { motion } from "framer-motion";
const Home = () => {
  const history = useHistory();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
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
    </motion.div>
  );
};

export default Home;
