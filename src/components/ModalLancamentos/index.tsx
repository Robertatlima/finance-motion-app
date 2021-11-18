import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import Button from "../Button";
import { Container } from "./styles";

const FormLancamento = ({ handleClickCloseInsertModal }: any) => {
  const schema = yup.object().shape({
    tipo: yup.string().required("Campo Obrigatório"),
    frquencia: yup.string().required("Campo Obrigatório"),
    data: yup.string().required("Campo Obrigatório"),
    nome: yup.string().required("Campo Obrigatório"),
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
        <h2>Cadastrar Lançamento</h2>
        <button onClick={handleClickCloseInsertModal}>X</button>
      </div>
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="tipo"
          label="Tipo"
          type="tipo"
          margin="normal"
          fullWidth
          size="small"
          color="success"
          {...register("tipo")}
          error={!!errors.tipo}
          helperText={errors.tipo?.message}
        />
        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="frequencia"
          label="Frequência"
          type="frequencia"
          margin="normal"
          fullWidth
          size="small"
          color="success"
          {...register("frequencia")}
          error={!!errors.frequencia}
          helperText={errors.frequencia?.message}
        />
        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="data"
          label="Data"
          type="data"
          margin="normal"
          fullWidth
          size="small"
          color="success"
          {...register("data")}
          error={!!errors.data}
          helperText={errors.data?.message}
        />
        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="nome"
          label="Nome"
          type="nome"
          margin="normal"
          fullWidth
          size="small"
          color="success"
          {...register("nome")}
          error={!!errors.nome}
          helperText={errors.nome?.message}
        />

        <Button fullWidth secondary type="submit">
          Cadastrar
        </Button>
      </form>
    </Container>
  );
};
export default FormLancamento;
