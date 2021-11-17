import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import Button from "../Button";
import { Container } from "./styles";

const FormObjetivo = ({ handleClickCloseInsertModal }: any) => {
  const schema = yup.object().shape({
    nome: yup.string().required("Campo Obrigatório"),
    valor: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <div className="modal">
        <h2>Objetivo</h2>
        <button onClick={handleClickCloseInsertModal}>X</button>
      </div>
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="objetivo"
          label="Nome do objetivo"
          type="nome"
          margin="normal"
          fullWidth
          size="small"
          color="success"
          {...register("nome")}
          error={!!errors.nome}
          helperText={errors.nome?.message}
        />
        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="valor"
          label="Valor"
          type="valor"
          margin="normal"
          fullWidth
          size="small"
          color="success"
          {...register("valor")}
          error={!!errors.valor}
          helperText={errors.valor?.message}
        />

        <Button fullWidth secondary type="submit">
          Criar objetivo
        </Button>
      </form>
    </Container>
  );
};
export default FormObjetivo;
