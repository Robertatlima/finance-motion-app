import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import Button from "../Button";
import api from "../../services/api";
import { Container } from "./styles";
import { useUser } from "../../Provider/UserProvider";

const FormProfile = ({ handleClickCloseInsertModal }: any) => {
  const schema = yup.object().shape({
    // newPassword: yup.string().required("Campo Obrigatório"),
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(8, "Mínimo de 8 caracteres"),
    confirmNewPassword: yup
      .string()
      .min(0 || 8, "Mínimo de 8 caracteres")
      .oneOf([yup.ref("password")], "Senhas não conferem")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { user, editProfile } = useUser();

  const handleForm = (data: any) => {
    console.log(data);
    editProfile(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleForm)}>
        <h2>Editar Usuário</h2>
        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="name"
          label="Nome"
          type="name"
          defaultValue={user.name}
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
          defaultValue={user.email}
          type="email"
          margin="normal"
          fullWidth
          size="small"
          color="success"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        {/* <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="password"
          label="Senha atual"
          type="password"
          margin="normal"
          fullWidth
          size="small"
          color="success"
          {...register("newPassword")}
          error={!!errors.newPassword}
          helperText={errors.newPassword?.message}
        /> */}
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
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="confirmPassword"
          label="Confirme Nova Senha"
          type="password"
          margin="normal"
          fullWidth
          size="small"
          color="success"
          {...register("confirmNewPassword")}
          error={!!errors.confirmNewPassword}
          helperText={errors.confirmNewPassword?.message}
        />
        <Button secondary={true} fullWidth type="submit">
          Confirmar
        </Button>
      </form>
    </Container>
  );
};
export default FormProfile;
