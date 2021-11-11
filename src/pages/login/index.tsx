import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import axios from "axios";
import SvgLogin from "../../components/svgLogin";
import Logo from "../../components/logo";
import { Container } from "./styles";
const Login = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = () => {
    history.push("/dashboard");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleForm)}>
        <Logo />
        <SvgLogin />
        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="email"
          label="Email"
          type="email"
          margin="normal"
          size="small"
          color="secondary"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="password"
          type="password"
          label="Senha"
          margin="normal"
          size="small"
          color="secondary"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </form>
      <button>Entrar</button>
      <button>Criar minha conta</button>
    </Container>
  );
};
export default Login;
