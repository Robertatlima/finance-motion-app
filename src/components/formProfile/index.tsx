import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import Button from "../Button";
import api from "../../services/api";
import { Container } from "./styles";

const FormProfile = ({ handleClickCloseInsertModal }: any) => {
  const schema = yup.object().shape({
    password: yup.string().required("Campo Obrigatório"),
    newPassword: yup.string().required("Campo Obrigatório"),
    confirmNewPassword: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data: any) => {
    console.log(data);
    //   api
    //     .patch(`/users/${user}`, data)
    //     .then((response) => console.log("Senha alterada com sucesso"))
    //     .catch((err) => console.log(err));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleForm)}>
        <h2>Editar Perfil</h2>
        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="name"
          label="Nome"
          type="name"
          defaultValue="Gustavo"
          margin="normal"
          fullWidth
          size="small"
          color="success"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="email"
          label="Email"
          type="email"
          margin="normal"
          fullWidth
          size="small"
          color="success"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="password"
          label="Senha Atual"
          type="password"
          margin="normal"
          fullWidth
          size="small"
          color="success"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="password"
          label="Nova Senha"
          type="password"
          margin="normal"
          fullWidth
          size="small"
          color="success"
          {...register("newPassword")}
          error={!!errors.newPassword}
          helperText={errors.newPassword?.message}
        />

        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="password"
          label="Senha Atual"
          type="password"
          margin="normal"
          fullWidth
          size="small"
          color="success"
          {...register("confirmNewPassword")}
          error={!!errors.confirmNewPassword}
          helperText={errors.confirmNewPassword?.message}
        />
        <Button fullWidth disable type="submit">
          Confirmar
        </Button>
      </form>
    </Container>
  );
};
export default FormProfile;
