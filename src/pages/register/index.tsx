import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";

import SvgRegister from "../../components/svgRegister";
import Logo from "../../components/logo";
import { Container } from "./styles";
import { useAuth } from "../../Provider/Auth";
import Button from "../../components/Button";

interface UserDataRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirmed: string;
}
const Register = () => {
  const history = useHistory();
  const { registrar } = useAuth();
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
    passwordConfirmed: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data: UserDataRegister) => {
    registrar(data, history);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleForm)}>
        <div className="textoRegister">
          <Logo />
          <SvgRegister />
        </div>
        <TextField
          variant="filled"
          label="Nome"
          InputProps={{ disableUnderline: true }}
          margin="normal"
          fullWidth
          size="small"
          color="secondary"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          variant="filled"
          id="email"
          InputProps={{ disableUnderline: true }}
          label="Email"
          type="email"
          fullWidth
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
          fullWidth
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          variant="filled"
          id="passwordConfirmed"
          fullWidth
          type="password"
          InputProps={{ disableUnderline: true }}
          label="Confirmar Senha"
          margin="normal"
          size="small"
          color="secondary"
          {...register("passwordConfirmed")}
          error={!!errors.passwordConfirmed}
          helperText={errors.passwordConfirmed?.message}
        />
        <Button fullWidth type="submit">
          {" "}
          Cadastrar
        </Button>
        <Button disable fullWidth onClick={() => history.push("/login")}>
          {" "}
          Já sou cadastrado
        </Button>
      </form>
    </Container>
  );
};
export default Register;
