import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, MenuItem } from "@material-ui/core";
import Button from "../Button";
import { Container } from "./styles";
import { useUser } from "../../Provider/UserProvider";
import api from "../../services/api";
import { useLancamentos } from "../../Provider/Lancamentos";
import { useState } from "react";
import { BsPencilFill } from "react-icons/bs";

const tipos = [
  { id: 1, valor: "Entrada" },
  { id: 2, valor: "Saída" },
];

const frequencias = [
  { id: 1, valor: "Diário" },
  { id: 2, valor: "Semanal" },
  { id: 3, valor: "Mensal" },
  { id: 4, valor: "Anual" },
  { id: 5, valor: "Eventual" },
];

const ModalDetalhes = ({
  handleClickCloseModal,
  lancamento,
  openModal,
}: any) => {
  const [edit, setEdit] = useState(openModal);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const { user, userToken } = useUser();
  const { listarLancamentos } = useLancamentos();

  const schema = yup.object().shape({
    tipo: yup.string().required("Campo Obrigatório"),
    frequencia: yup.string().required("Campo Obrigatório"),
    valor: yup.string().required("Campo Obrigatório"),
    categoria: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data: any) => {
    const dadosTratados = {
      nome: lancamento.nome,
      valor: Number(data.valor),
      mes: lancamento.mes,
      dia: lancamento.dia,
      ano: lancamento.ano,
      frequencia: data.frequencia,
      categoria: data.categoria,
      progresso: 0,
      prazo: 1,
      tipo: data.tipo.toLowerCase(),
      userId: user.id,
    };
    api
      .patch(`/extrato/${lancamento.id}`, dadosTratados, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        listarLancamentos();
        handleClickCloseModal();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container tipo={lancamento.tipo}>
      <div className="modal">
        <h2>{lancamento.nome}</h2>
        <button onClick={handleClickCloseModal}>X</button>
      </div>
      {edit ? (
        <>
          <div className="headContainer">
            <p>R$ {lancamento.valor.toFixed(2)}</p>
            <button onClick={handleEdit}>
              <BsPencilFill />
            </button>
          </div>
          <div className="bodyContainer">
            <p>Categoria</p>
            <p>{lancamento.categoria}</p>
          </div>
          <div className="bodyContainer">
            <p>Tipo</p>
            <p>{lancamento.tipo}</p>
          </div>
          <div className="bodyContainer">
            <p>Frequência</p>
            <p>{lancamento.frequencia}</p>
          </div>
        </>
      ) : (
        <form>
          <TextField
            variant="filled"
            InputProps={{ disableUnderline: true }}
            id="valor"
            label="Valor"
            type="valor"
            margin="normal"
            fullWidth
            defaultValue={lancamento.valor}
            size="small"
            color="success"
            {...register("valor")}
            error={!!errors.valor}
            helperText={errors.valor?.message}
          />
          <TextField
            variant="filled"
            InputProps={{ disableUnderline: true }}
            id="categoria"
            label="Categoria"
            type="categoria"
            margin="normal"
            fullWidth
            defaultValue={lancamento.categoria}
            size="small"
            color="success"
            {...register("categoria")}
            error={!!errors.categoria}
            helperText={errors.categoria?.message}
          />
          <TextField
            variant="filled"
            InputProps={{ disableUnderline: true }}
            id="tipo"
            label="Tipo"
            type="tipo"
            margin="normal"
            fullWidth
            defaultValue={lancamento.tipo}
            select
            size="small"
            color="success"
            {...register("tipo")}
            error={!!errors.tipo}
            helperText={errors.tipo?.message}
          >
            {tipos.map((tipo) => (
              <MenuItem key={tipo.id} value={tipo.valor}>
                {tipo.valor}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant="filled"
            InputProps={{ disableUnderline: true }}
            id="frequencia"
            label="Frequência"
            type="frequencia"
            margin="normal"
            fullWidth
            select
            defaultValue={lancamento.frequencia}
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

          <Button fullWidth secondary onClick={handleSubmit(handleForm)}>
            Atualizar
          </Button>
        </form>
      )}
    </Container>
  );
};
export default ModalDetalhes;
