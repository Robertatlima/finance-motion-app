import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, MenuItem } from "@material-ui/core";
import Button from "../Button";
import { Container } from "./styles";
import { useUser } from "../../Provider/UserProvider";
import api from "../../services/api";
import { useLancamentos } from "../../Provider/Lancamentos";

const frequencias = [
  { id: 1, valor: "Diário" },
  { id: 2, valor: "Semanal" },
  { id: 3, valor: "Mensal" },
  { id: 4, valor: "Anual" },
  { id: 5, valor: "Eventual" },
];

const FormObjetivo = ({ handleClickCloseInsertModal }: any) => {
  const { user, userToken } = useUser();
  const { listarLancamentos } = useLancamentos();
  const schema = yup.object().shape({
    frequencia: yup.string().required("Campo Obrigatório"),
    date: yup.string().required("Campo Obrigatório"),
    nome: yup.string().required("Campo Obrigatório"),
    valor: yup.string().required("Campo Obrigatório"),
    prazo: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data: any) => {
    const dadosTratados = {
      nome: data.nome,
      valor: Number(data.valor) / Number(data.prazo),
      mes: Number(data.date.split("-")[1]),
      dia: Number(data.date.split("-")[2]),
      ano: Number(data.date.split("-")[0]),
      frequencia: data.frequencia,
      categoria: "Objetivo",
      progresso: 1,
      prazo: data.prazo,
      tipo: "objetivo",
      userId: user.id,
    };

    api
      .post("extrato", dadosTratados, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => {
        listarLancamentos();
        handleClickCloseInsertModal();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <div className="modal">
        <h2>Cadastrar Objetivo</h2>
        <button onClick={handleClickCloseInsertModal}>X</button>
      </div>
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="valor"
          label="Valor total"
          type="valor"
          margin="normal"
          fullWidth
          size="small"
          color="success"
          {...register("valor")}
          error={!!errors.valor}
          helperText={errors.valor?.message}
        />
        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="prazo"
          label="Prazo em meses"
          type="prazo"
          margin="normal"
          fullWidth
          size="small"
          color="success"
          {...register("prazo")}
          error={!!errors.prazo}
          helperText={errors.prazo?.message}
        />
        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="frequencia"
          label="Frequência"
          type="frequencia"
          margin="normal"
          fullWidth
          select
          size="small"
          color="success"
          {...register("frequencia")}
          error={!!errors.frequencia}
          helperText={errors.frequencia?.message}
        >
          {frequencias.map((mes) => (
            <MenuItem key={mes.id} value={mes.valor}>
              {mes.valor}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          variant="filled"
          InputProps={{ disableUnderline: true }}
          id="date"
          // label="Data"
          type="date"
          margin="normal"
          defaultValue="11/19/2021"
          fullWidth
          size="small"
          color="success"
          {...register("date")}
          error={!!errors.date}
          helperText={errors.date?.message}
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
export default FormObjetivo;
